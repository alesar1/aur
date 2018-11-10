# Maintainer: Håvard Pettersson <mail@haavard.me>
# Contributor: Andrew Stubbs <andrew.stubbs@gmail.com>

_pkgname=etcher
pkgname=etcher-git
pkgver=1.4.6.r0.g3f8d2e42
pkgrel=1
pkgdesc='Burn images to SD cards & USB drives, safe & easy (git version)'
arch=(x86_64)
url='https://www.balena.io/etcher/'
license=(apache)
depends=(electron gtk2 libxtst libxss gconf nss alsa-lib)
makedepends=(npm python2 git jq)
optdepends=('libnotify: for notifications'
            'speech-dispatcher: for text-to-speech')
provides=("$_pkgname")
conflicts=("$_pkgname")
options=('!strip')
source=("$pkgname::git+https://github.com/balena-io/$_pkgname.git"
        'git+https://github.com/balena-io/scripts.git'
        'etcher-electron'
        'etcher-electron.desktop')
sha256sums=('SKIP'
            'SKIP'
            'a64f79fe894c4828b515844703b1795448a4818a654f5d42d4f567f4d80998d1'
            '89291532fb6e6c5555b43d61c9ba3df103bca0eace040483884b86fd30dca3e4')

pkgver() {
  cd "$pkgname"
  git describe --tags --long | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  cd "$pkgname"
  git submodule init
  git config submodule.scripts/resin.url "$srcdir/scripts"
  git submodule update

  # electron --version does not work in a chroot
  # https://github.com/electron/electron/issues/12621
  export _electron_version=$(tail -c +2 /usr/lib/electron/version)
  mv package.json{,.orig}
  jq '.devDependencies.electron |= env._electron_version' \
    package.json.orig > package.json
}

build() {
  cd "$pkgname"

  make electron-develop
  make webpack
  npm prune --production
}

package() {
  cd "$pkgname"

  _appdir="$pkgdir"/usr/share/$_pkgname
  install -d "$_appdir"

  install package.json "$_appdir"
  cp -a {lib,build,generated,node_modules} "$_appdir"
  install -D assets/icon.png "$_appdir"/assets/icon.png
  install -D lib/gui/app/index.html "$_appdir"/lib/gui/app/index.html

  install -Dm755 "$srcdir"/etcher-electron "$pkgdir"/usr/bin/etcher-electron
  install -Dm644 "$srcdir"/etcher-electron.desktop \
    "$pkgdir"/usr/share/applications/etcher-electron.desktop

  for size in 16x16 32x32 48x48 128x128 256x256 512x512; do
    install -Dm644 assets/iconset/$size.png \
      "$pkgdir"/usr/share/icons/hicolor/$size/apps/etcher-electron.png
  done
}

# vim:set ts=2 sw=2 et:
