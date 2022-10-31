# Maintainer: Andrew Lin <andrewlin16 at gmail dot com>

pkgname=zxtune-bin
pkgver=r5020
pkgrel=1
pkgdesc="Portable toolkit for ZX-Spectrum music playing (pre-compiled)"
arch=(x86_64)
url="https://zxtune.bitbucket.io/"
license=(GPL3)
depends=(boost-libs gcc-libs qt4 zlib)
optdepends=(
  'alsa-lib: for ALSA output support'
  'lame: for conversion to .mp3 format'
  'libvorbis: for conversion to .ogg format'
  'flac: for conversion to .flac format'
  'curl: for accessing data via network schemes'
)
provides=(zxtune)
conflicts=(zxtune-git)
source=("https://bitbucket.org/zxtune/zxtune/downloads/zxtune_${pkgver}_linux_x86_64.tar.gz")
md5sums=('0411eb2a14e7e6e357114e13bb5143bb')

package() {
  cp -r usr "${pkgdir}/usr"
}

# vim:set ts=2 sw=2 et:
