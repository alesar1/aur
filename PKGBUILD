# Maintainer: Vasiliy Nikitin <nvasya95@gmail.com>
# Contributor: Guillaume ALAUX <guillaume@archlinux.org>
# Contributor: Kevin Piche <kevin@archlinux.org>
# Contributor: Aaron Griffin <aaron@archlinux.org>
# Contributor: dorphell <dorphell@archlinux.org>

_pkgname=easytag
pkgname=easytag-ogg-patch-fixed
pkgver=2.4.3
pkgrel=4
pkgdesc='Simple application for viewing and editing tags in audio files, using OpenSUSE patch and some metadata fixes'
arch=('x86_64')
license=('GPL')
url='https://wiki.gnome.org/Apps/EasyTAG'
makedepends=('intltool' 'itstool' 'python' 'patch')
depends=('id3lib' 'libid3tag' 'gtk3' 'libvorbis' 'flac' 'speex' 'wavpack' 'taglib'
         'desktop-file-utils' 'opusfile')
conflicts=(easytag)
provides=(easytag)
source=(
    https://download.gnome.org/sources/${_pkgname}/${pkgver:0:3}/${_pkgname}-${pkgver}.tar.xz
    0001-easytag-revert-open-handle-ogg.rpatch
    0002-metadata-fix.patch
)
sha256sums=(
    'fc51ee92a705e3c5979dff1655f7496effb68b98f1ada0547e8cbbc033b67dd5'
    '114188c02e3641374b7c6fa5a662215a66fbe6d55e195d192a8856aab3ebdca0'
    '60f5b46f8868968c07657176df1900d895d88ff8027ab69d836c9d4326b13af0'
)

prepare() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  for f in "${srcdir}"/*.rpatch; do
    patch -p1 -R < "$f"
  done
  for f in "${srcdir}"/*.patch; do
    patch -p1 -N < "$f"
  done
}

build() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  ./configure --prefix=/usr
  make
}

check() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  make -k check
}

package() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  make DESTDIR="${pkgdir}" install
}
