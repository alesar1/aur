# Maintainer: Tyler Swagar <buttpickle69@shaw.ca>
# Contributor: Robin Baumgartner <robin@baumgartners.ch>
# Contributor: Max Roder <maxroder@web.de>
# Contributor: Oleg Finkelshteyn <olegfink@gmail.com>

pkgname='ripit'
pkgver='4.0.0_rc_20161009'
pkgrel='1'
pkgdesc='Command line tool to rip tracks from audio cds and encode them'
arch=('any')
url='https://www.ripit.pl'
license=('GPL')
depends=('cdparanoia' 'cddb_get' 'perl-xml-simple' 'perl-mp3-tag')
optdepends=(
  'flac: Encoding (FLAC)'
  'lame: Encoding (MP3)'
  'vorbis-tools: Encoding (Vorbis)'
  'wavpack: Encoding (WAV)'
  'musepack-tools: Encoding (MPC/MPP)'
  'faac: Encoding (M4A/AAC)'
  'normalize: Normalizing'
  'perl-libwww: Submitting to CDDB' 
  'libmusicbrainz3: Tagging (Musicbrainz.org)'
)
source=("https://www.ripit.pl/ripit/ripit-${pkgver}.tar.bz2")
sha256sums=('2434ec6e5b8044de9b081cb7a0c713e52a09443270c6abe9f415a006ecda0c66')
backup=('etc/ripit/config')

package() {
  cd "$srcdir/$pkgname-$pkgver"

  make prefix=${pkgdir}/usr etcdir=${pkgdir}/etc/ripit mandir=${pkgdir}/usr/share/man/man1 INSTALL=/usr/bin/install install
}
