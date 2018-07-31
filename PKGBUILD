# Maintainer: Oliver Jaksch <arch-aur@com-in.de>

pkgname=anydesk-test
pkgver=2.9.9
pkgrel=1
pkgdesc="'AnyDesk Free' is an All-In-One Software for Remote Support - Playground-Version"
arch=('i686' 'x86_64')
url="https://anydesk.de"
license=('custom:Freeware')
depends=('fakeroot' 'gtkglext' 'libglvnd' 'gtk2' 'libx11' 'glibc' 'glib2' 'gdk-pixbuf2' 'libxcb' 'cairo' 'pango' 'libxi' 'libxrandr' 'libxtst' 'libxext' 'libxfixes' 'libxdamage' 'gcc-libs')
optdepends=('libpulse')
conflicts=('anydesk')

source_i686=("http://download.anydesk.com/linux/anydesk_${pkgver}-1_i386.deb" "https://download.anydesk.com/linux/anydesk-${pkgver}-i686.tar.gz")
source_x86_64=("http://download.anydesk.com/linux/anydesk_${pkgver}-1_amd64.deb" "https://download.anydesk.com/linux/anydesk-${pkgver}-amd64.tar.gz")

sha256sums_i686=('8e1a9a553f1b180c2d820050507728e2fe969480b32f3b396c394a24e5089d97' '4093a8af798cfe5ad27b0c285ec6f2f2447963461e0810a050418c6af16be75a')
sha256sums_x86_64=('965d6b35dc8894d52cb7ff3944afb3415274d913e4941819c86fd393afdc25cf' 'e21e0972099c15eae126e2f4bacf18a56a67d428a50368ae4fe546090f17cae0')

package() {
    cd "${pkgdir}"
    tar xf "${srcdir}/data.tar.gz"
    install -m755 "${srcdir}/anydesk-${pkgver}/anydesk" "${pkgdir}/usr/bin/anydesk"
    #
    msg2 "\e[1;32mAnyDesk now has a systemd file for unattendant access: anydesk.service \e[0m"
    install -D -m 644 "${pkgdir}/usr/share/anydesk/files/systemd/anydesk.service" "${pkgdir}/usr/lib/systemd/system/anydesk.service"
    sed -i "s/PIDFile=\/tm\/ad.pid/PIDFile=\/run\/anydesk.pid/" "${pkgdir}/usr/lib/systemd/system/anydesk.service"
}
