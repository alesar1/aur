# Maintainer: Meow < a.li.devtty at gmail dot com >

# Get download links and md5 sums for latest version of RStudio desktop
cat <<_EOF_ >/dev/null
## R code #############
require(XML)
page = htmlTreeParse("http://www.rstudio.com/products/rstudio/download/",useInternalNodes = T)
links = sapply(getNodeSet(page,'//table[@class="downloads"]/thead/tr/th[text()="Installers"]/../../..//a[contains(@href,".deb")]'),xmlGetAttr,'href')
md5sums = sapply(getNodeSet(page,'//table[@class="downloads"]/thead/tr/th[text()="Installers"]/../../..//a[contains(@href,".deb")]/../..//code'),xmlValue)
print(cbind(links,md5sums))
#######################
_EOF_

pkgname=rstudio-desktop-bin
pkgver=0.99.467
pkgrel=2
pkgdesc="A new integrated development environment (IDE) for R (binary version from RStudio official website)"
arch=('i686' 'x86_64')
license=('GPL')
url="http://www.rstudio.org/"
depends=('r>=2.11.1' 'shared-mime-info' 'gstreamer0.10-base')
conflicts=('rstudio-desktop' 'rstudio-desktop-git' 'rstudio-desktop-preview-bin')
provides=("rstudio-desktop=${pkgver}")
#options=(!strip)


_x86md5=0ca919255495cc87112df12a1cff7e29
_x64md5=dd64fc165de55a0be229f2362cd776da

case "$CARCH" in
	'i686')
		_arch=i386
		md5sums=($_x86md5)
		;;
	'x86_64')
		_arch=amd64
		md5sums=($_x64md5)
		;;
esac    
source=("http://download1.rstudio.org/rstudio-${pkgver}-${_arch}.deb")
install="$pkgname".install

package() {
  msg "Converting debian package..."

  cd "$srcdir"
  tar zxpf data.tar.gz -C "$pkgdir"
  install -dm755 "$pkgdir/usr/bin"

  # cd "$pkgdir/usr/lib/rstudio/bin"
  # rm lib*.so.*

  # cd "$pkgdir/usr/lib/rstudio/bin/rsclang"
  # ln -sf /usr/lib/libclang.so ./

  find "$pkgdir/usr" -type d -print0 | xargs -0 chmod 755

  cd "$pkgdir/usr/bin"
  ln -s -f ../lib/rstudio/bin/rstudio rstudio-bin
}
# vim:ft=sh tabstop=2 expandtab
