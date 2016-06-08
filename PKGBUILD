# Maintainer: Perry Hung <perry@leaflabs.com>

pkgname=decklink
_dvver=10.6.7a1 # DesktopVideo
_mever=3.5.2a2 # MediaExpress
pkgver=${_dvver}
pkgrel=1
pkgdesc="Drivers for Blackmagic Design DeckLink, Intensity or Multibridge video editing cards"
arch=('i686' 'x86_64')
url="http://www.blackmagic-design.com/products/"
license=('custom')
makedepends=('curl')
depends=('linux-headers' 'libxml2' 'libpng12' 'glu' 'qt4')
options=('!strip' 'staticlibs')
install='decklink.install'

[ "$CARCH" = "i686" ] && _arch='i386'
[ "$CARCH" = "x86_64" ] && _arch='x86_64'

pkgsrc_url="https://www.blackmagicdesign.com/api/register/us/download/76fe80ebd9e9490abbde3923c42ea95f"
pkgsrc_file=$pkgname-${_dvver}.tar.gz
pkgsrc_sha256sum="f7d9768acebc2ea9c5f63ffdb645ce758276f98ed43fd64a3fc5cc26fdabaf19"

prepare() {
  temp_url=`curl --data '{country":"us","platform":"Linux"}' $pkgsrc_url`
  curl -o $pkgsrc_file $temp_url
  shasum=`sha256sum $pkgsrc_file | cut -d " " -f1`
  [ "${shasum}" != "${pkgsrc_sha256sum}" ] && ( echo "Integrity check failed."; exit 1 )
  tar xf ${pkgsrc_file}
}

package() {
	mkdir -p "$pkgdir/usr/share/licenses/$pkgname"
	ln -s /usr/share/doc/desktopvideo/License.txt "$pkgdir/usr/share/licenses/$pkgname/COPYING"

	cd "$srcdir/Blackmagic_Desktop_Video_Linux_${pkgver%a*}/other/${_arch}"

	tar xf "desktopvideo-${_dvver}-${_arch}.tar.gz"
	cp -a "desktopvideo-${_dvver}-${_arch}/"* "$pkgdir"
	mv "$pkgdir/usr/sbin/"* "$pkgdir/usr/bin"
	rm -rf "$pkgdir/usr/sbin"

	tar xf "mediaexpress-${_mever}-${_arch}.tar.gz"
	cp -a "mediaexpress-${_mever}-${_arch}/"* "$pkgdir"
}
