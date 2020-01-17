# Maintainer: Jean Lucas <jean@4ray.co>

_pkgroot=signal-desktop
pkgname=${_pkgroot}-noto
_pkgname=Signal-Desktop
pkgver=1.29.6
pkgrel=1
pkgdesc='Electron application that links with Signal on mobile (Noto emoji version)'
arch=(x86_64)
url=https://github.com/Skycoder42/Signal-Desktop-Noto
license=(GPL3)
depends=(electron)
makedepends=(
  yarn
  git
  python2
  'nodejs>=12.4.0'
  npm
  python
)
provides=(signal signal-desktop)
replaces=(signal signal-desktop)
source=(
  $_pkgroot-$pkgver.tar.gz::https://github.com/signalapp/$_pkgname/archive/v$pkgver.tar.gz
  $_pkgroot.desktop
  openssl-linking.patch
  noto-emoji.patch
)
sha512sums=('3b04224c8bc105b14366fc585daff2a6210a0442e48c6ee5e4ffa964dcea5ab302b186eca8287d66d0d71fa7d41b7ba66ad886b23d86b35832744d88ad639f86'
            'c5ec0bf524e527ecf94207ef6aa1f2671346e115ec15de6d063cde0960151813752a1814e003705fc1a99d4e2eae1b3ca4d03432a50790957186e240527cc361'
            '2c10d4cc6c0b9ca650e786c1e677f22619a78c93465f27fc4cf4831f1cfe771f3b9885a416e381a9e14c3aea5d88cb3545264046188db72d54b8567266811e51'
            '7ad3e53dda568d5218e25ff568fe4b5fd83dfcaa6cf25a6caf26da03dc23dd54d7a66bd45d75fdfbf23fdb6e95754e29e13dbc37d2fa5bd14c6d976a3187514f')

prepare() {
  cd $_pkgname-$pkgver
  
  # apply emoji patch
  git apply ../noto-emoji.patch

  # Fix SpellChecker build with imminent Node 13
  # See https://github.com/atom/node-spellchecker/issues/127
  sed -r 's#("spellchecker": ").*"#\1https://github.com/atom/node-spellchecker/archive/613ff91dd2d9a5ee0e86be8a3682beecc4e94887.tar.gz"#' -i package.json

  # Set system Electron version for ABI compatibility
  sed -r 's#("electron": ").*"#\1'$(cat /usr/lib/electron/version)'"#' -i package.json

  # Allow higher Node versions
  sed 's#"node": "#&>=#' -i package.json

  yarn install

  # Have SQLCipher dynamically link from OpenSSL
  # See https://github.com/signalapp/Signal-Desktop/issues/2634
  patch -Np0 < ../openssl-linking.patch
}

build() {
  cd $_pkgname-$pkgver

  # Gruntfile expects Git commit information which we don't have in a tarball download
  # See https://github.com/signalapp/Signal-Desktop/issues/2376
  yarn generate exec:build-protobuf exec:transpile concat copy:deps sass

  yarn build-release --dir
}

package() {
  cd $_pkgname-$pkgver

  install -d "$pkgdir"/usr/{lib,bin}
  cp -a release/linux-unpacked/resources "$pkgdir"/usr/lib/$_pkgroot
  cat << EOF > "$pkgdir"/usr/bin/$_pkgroot
#!/bin/sh

NODE_ENV=production electron /usr/lib/$_pkgroot/app.asar "\$@"
EOF
  chmod +x "$pkgdir"/usr/bin/$_pkgroot

  install -Dm 644 ../$_pkgroot.desktop -t "$pkgdir"/usr/share/applications
  for i in 16 24 32 48 64 128 256 512 1024; do
    install -Dm 644 build/icons/png/${i}x${i}.png \
      "$pkgdir"/usr/share/icons/hicolor/${i}x${i}/apps/$_pkgroot.png
  done
}
