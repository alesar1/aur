# Maintainer: Daniel Haß <aur@hass.onl>
pkgname=standardnotes-desktop
_pkgname=desktop
pkgver=2.0.0
pkgrel=1
pkgdesc="A standard notes app with an un-standard focus on longevity, portability, and privacy."
arch=('x86_64')
url="https://standardnotes.org/"
license=('GPL3')
depends=('electron')
makedepends=('npm')
source=("https://github.com/standardnotes/desktop/archive/v$pkgver.tar.gz"
        'standardnotes-desktop.desktop'
        'standardnotes-desktop.js')
sha256sums=('3c9850c6d35a50a269dd0fbed40867daf53aba2ab834ad97171a2fdd44986191'
            'eadf8fe7d871557d733db53fdaefd57fd7c06f21dcaa99a72b3dd6b768d7d969'
            '16934b1dc1d88d668dd657e991cc58c7292a398fec3aab193478e9988882673d')

package() {
  mkdir -p $pkgdir/opt/$pkgname
  cp -r $srcdir/$_pkgname-$pkgver/* $pkgdir/opt/$pkgname/

  install -D -m644 $pkgname.desktop "${pkgdir}/usr/share/applications/${pkgname}.desktop"
  install -D -m644 $srcdir/$_pkgname-$pkgver/build/icon/Icon-512x512.png "${pkgdir}/usr/share/icons/standard-notes.png"
  install -D -m655 $pkgname.js "${pkgdir}/usr/bin/${pkgname}"

  cd $pkgdir/opt/$pkgname/app/
  npm install --production --no-optional
  npm prune --production
}
