# Maintainer: Xuanwo <xuanwo@archlinuxcn.org>
pkgname=logseq-desktop-bin
_pkgname=logseq-desktop
pkgver=0.7.2
pkgrel=1
pkgdesc="A privacy-first, open-source platform for knowledge sharing and management."
arch=("x86_64")
url="https://github.com/logseq/logseq"
license=('AGPL3')
provides=("logseq-desktop")
conflicts=("logseq-desktop-git" "logseq-desktop")
source=("https://github.com/logseq/logseq/releases/download/${pkgver}/logseq-linux-x64-${pkgver}.zip"
      "${_pkgname}.desktop")
sha256sums=('64e1dbfdd9c4ad15132905ba496c101b88bfe68d4f3541ab5a6227eec743a8e7'
            '6e834466132551c721ba2ffe92fc0f81056b3151fe6b5f0f469ece937f9b7e84')

package() {
    cd "$srcdir/Logseq-linux-x64"
    # desktop file
    install -Dm644 $srcdir/$_pkgname.desktop $pkgdir/usr/share/applications/logseq.desktop
    # icons
    install -Dm644 "$srcdir/Logseq-linux-x64/resources/app/icons/logseq.png" "$pkgdir/usr/share/pixmaps/logseq.png"
    install -d ${pkgdir}/opt/${pkgname}
    cp -r $srcdir/Logseq-linux-x64/* ${pkgdir}/opt/${pkgname}/
    install -d ${pkgdir}/usr/bin
    ln -s /opt/${pkgname}/Logseq ${pkgdir}/usr/bin/logseq
}
