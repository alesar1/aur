# ContributorMaintainer: Sergej Pupykin <pupykin.s+arch@gmail.com>
# Contributor: William Rea <sillywilly@gmail.com>
# Maintainer:  Stefan Husmann <stefan-husmann@t-online.de>

pkgname=gcstar
_pkgname=GCstar
pkgver=1.7.2
pkgrel=4
pkgdesc="A collection management application"
arch=('any')
url="http://www.gcstar.org"
license=("GPL")
depends=('gtk2-perl' 'perl-libwww' 'perl-xml-simple'
	 'perl-net-snmp' 'perl-xml-parser' 'perl-switch'
	 'perl-xml-libxml' 'perl-sort-naturally'
	 'perl-http-message' 'perl-http-date' 'perl-http-cookies'
	 'perl-gd' 'perl-date-calc' 'perl-lwp-protocol-https'
	 'perl-archive-zip' 'perl-datetime-format-strptime'
	 'perl-gdgraph' 'perl-mp3-info' 'perl-mp3-tag'
	 'perl-net-freedb' 'perl-ogg-vorbis-header-pureperl')
optdepends=('perl-image-exiftool:  to retrieve data from a mkv file')
source=(https://gitlab.com/Kerenoc/GCstar/-/archive/v$pkgver/${_pkgname}-v$pkgver.tar.bz2)
sha256sums=('0f0ff1a8ac7dcd9ce6c83ebc46692260b8a1c123918227a97883e24db4952ee0')

package() {
  cd ${_pkgname}-v$pkgver/$pkgname
  perl ./install --text --prefix="$pkgdir"/usr
  install -D -m644 "$pkgdir"/usr/share/gcstar/icons/gcstar_256x256.png \
                   "$pkgdir"/usr/share/pixmaps/gcstar.png
  install -D -m644 "$pkgdir"/usr/share/gcstar/icons/gcstar_32x32.png \
                   "$pkgdir"/usr/share/pixmaps/gcstar32.png
  cp -R share/applications "$pkgdir"/usr/share
  mv "$pkgdir"/usr/man "$pkgdir"/usr/share
}
