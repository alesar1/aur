# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=gmail-desktop
_pkgver=3.0.0-alpha.35
pkgver=${_pkgver//-/.}
pkgrel=2
_nodeversion=14
_electronversion=20
pkgdesc="Unofficial Gmail desktop app"
arch=('x86_64')
url="https://github.com/timche/gmail-desktop"
license=('MIT')
depends=("electron${_electronversion}")
makedepends=('nvm')
optdepends=('libnotify: desktop notifications'
            'libappindicator-gtk3: tray icon')
source=("$pkgname-$pkgver.tar.gz::$url/archive/v$_pkgver.tar.gz"
        "$pkgname.sh"
        "$pkgname.desktop")
sha256sums=('f22b10215586d5d879ea98a1671e6c0aac4b1166cff765f197f8e21f2bd66998'
            'b3b54bafd3d986492a29f6200abe8857f877a7bdb27f3db02578bd43bc9ba131'
            'b9a4fba1916c8b3e2ec55593b5700019c66c05a5da8f2f1b3f91edaddf0009dd')

_ensure_local_nvm() {
  # let's be sure we are starting clean
  which nvm >/dev/null 2>&1 && nvm deactivate && nvm unload
  export NVM_DIR="$srcdir/.nvm"

  # The init script returns 3 if version specified
  # in ./.nvrc is not (yet) installed in $NVM_DIR
  # but nvm itself still gets loaded ok
  source /usr/share/nvm/init-nvm.sh || [[ $? != 1 ]]
}

prepare() {
  cd "$pkgname-$_pkgver"

  # Disable husky
  sed -i '/husky/d' package.json

  _ensure_local_nvm
  nvm install "${_nodeversion}"
}

build() {
  cd "$pkgname-$_pkgver"
  electronDist="/usr/lib/electron$_electronversion"
  electronVer="$(sed s/^v// /usr/lib/electron$_electronversion/version)"
  _ensure_local_nvm
  npm config set cache "$srcdir/npm-cache"
  npm ci
  npm run build
  ./node_modules/.bin/electron-builder --linux --x64 --dir \
    $dist -c.electronDist=$electronDist -c.electronVersion=$electronVer
}

package() {
  cd "$pkgname-$_pkgver"
  install -d "$pkgdir/usr/lib/$pkgname"
  cp -r --no-preserve=ownership dist/linux-unpacked/resources \
    "$pkgdir/usr/lib/$pkgname"

  install -Dm644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname"
  install -Dm644 build/icon.png "$pkgdir/usr/share/pixmaps/$pkgname.png"
  install -Dm755 "$srcdir/$pkgname.sh" "$pkgdir/usr/bin/$pkgname"
  install -Dm644 "$srcdir/$pkgname.desktop" -t "$pkgdir/usr/share/applications"
}
