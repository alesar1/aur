# Maintainer: Edoardo Brogiolo <edoardo at brogiolo dot eu>
# COntributor: Previous maintainer Dimitris Kiziridis <ragouel at outlook dot com>
# Contributor: gspu <bssbk2455[at]gmail[dot]com>
# Contributor: Previous maintainer Uncle Hunto <unclehunto äτ ÝãΗ00 Ð0τ ÇÖΜ>
# Contributor: Limao Luo <luolimao+AUR@gmail.com>
# Contributor: TuxSpirit <tuxspirit@archlinux.fr>


pkgname=peazip-gtk2-bin
pkgver=7.8.0
pkgrel=1
pkgdesc="File and archive manager, 7Z BR RAR TAR ZST ZIP files extraction utility
"
arch=('i686' 'x86_64')
url='http://www.peazip.org/peazip-linux.html'
license=('GPL3')
depends=('lib32-curl'
         'lib32-gmp4'
         'lib32-gtk2'
         'balz'
         'paq8o'
         'p7zip'
         'upx'
         'zpaq'
         'gtk2')
options=('!emptydirs')
optdepends=('quad: A ROLZ-based file compressor' 
            'unace: Support for ace files'
            'arc: Support for arc files')
provides=('peazip')
conflicts=('peazip'
           'peazip-qt'
           'peazip-qt-opensuse-latest')
source=("${pkgname}-${pkgver}.rpm::https://sourceforge.net/projects/peazip/files/${pkgver}/peazip-${pkgver}.LINUX.GTK2-1.x86_64.rpm")
sha256sums=('2f469b7a216c42285425b7610c92aee492fe8d7babb0755a76d0a6c711efa7dc')

package() {
  cp -aR usr/ "${pkgdir}/"
  mv "${pkgdir}/usr/share/PeaZip" "${pkgdir}/usr/share/${pkgname}"
  rm "${pkgdir}/usr/bin/peazip"
  ln -s /usr/share/peazip-gtk2-bin/peazip "${pkgdir}/usr/bin/peazip"
  rm -rf "${pkgdir}/usr/lib"
  chmod --recursive 755 "${pkgdir}/usr/share/peazip-gtk2-bin/FreeDesktop_integration"
}
