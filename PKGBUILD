# Maintainer: neo2001 <neo2001 at posteo dot net>

# NConvert is provided as FREEWARE (NO Adware, NO Spyware) for private or
# educational use (including non-profit organizations).
# If you enjoy using NConvert, feel free to help the developer with a small donation.
# If you intend to use NConvert commercially, you must purchase a license.

pkgname=nconvert
pkgver=7.98
pkgrel=2
pkgdesc="Command line batch image processor and converter from XnSoft."
arch=('i686' 'x86_64')
url="https://www.xnview.com/en/nconvert/"
license=('custom')
install="${pkgname}.install"
source_i686=('http://download.xnview.com/NConvert-linux.tgz')
source_x86_64=('http://download.xnview.com/NConvert-linux64.tgz')
sha256sums_i686=('5e8364bdc1fe61d2c37871e0591ddc2048ccf0cd8041846b433ef04f10280cba')
sha256sums_x86_64=('bf18117457ba623549c0c6fe5ce080e69507e841bd1c4ab8d41f6b7a555b703e')

package() {
  cd NConvert
  install -m 755 -D nconvert "${pkgdir}/usr/bin/nconvert"
  install -m 644 -D license.txt "${pkgdir}/usr/share/licenses/${pkgname}/license.txt"
  install -m 644 -D -t "${pkgdir}/usr/share/doc/${pkgname}" Formats.txt ReadMe.txt Usage.txt WhatsNew.txt
}
