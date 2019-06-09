# Maintainer: Daniel Haß <aur@hass.onl>
pkgname=standardnotes-desktop
_pkgname=desktop
pkgver=3.0.12
pkgrel=2
pkgdesc="A standard notes app with an un-standard focus on longevity, portability, and privacy."
arch=('x86_64')
url="https://standardnotes.org/"
license=('GPL3')
conflicts=('sn-bin')
depends=('electron')
makedepends=('yarn' 'node-gyp')
source=("git://github.com/standardnotes/desktop.git"
        "git://github.com/sn-extensions/extensions-manager.git"
        "git://github.com/sn-extensions/batch-manager.git"
        'standardnotes-desktop.desktop'
        'standardnotes-desktop.js'
        'fix-electron-deprecations.patch')
sha256sums=('SKIP' 'SKIP' 'SKIP'
            '11e0f47494b09b95710399427f849d5693e97e39e7346469ac82da61138b7ca6'
            '16934b1dc1d88d668dd657e991cc58c7292a398fec3aab193478e9988882673d'
            '4572643e004de151e19079e60b1327e389429455b3db49358b6298c9dec8a9d4')

prepare() {
    cd $_pkgname
    git checkout v$pkgver
    git submodule init
    git config submodule.extensions-manager.url $srcdir/extensions-manager
    git config submodule.batch-manager.url $srcdir/batch-manager
    git submodule update

    patch -Np1 -i "${srcdir}/fix-electron-deprecations.patch"
}

build() {
  cd $srcdir/$_pkgname/
  yarn install
  yarn build
}


package() {
  mkdir -p $pkgdir/opt/$pkgname
  cp -r $srcdir/$_pkgname/app $pkgdir/opt/$pkgname/

  install -D -m644 $pkgname.desktop "${pkgdir}/usr/share/applications/${pkgname}.desktop"
  install -D -m644 $srcdir/$_pkgname/build/icon/Icon-512x512.png "${pkgdir}/usr/share/icons/standard-notes.png"
  install -D -m655 $pkgname.js "${pkgdir}/usr/bin/${pkgname}"
}
