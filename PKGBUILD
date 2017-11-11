# Maintainer : Alois Nešpor <info@aloisnespor.info>
# Contributor : Pedro Martinez-Julia <pedromj@um.es>

pkgname=libva-intel-driver-g45-h264
epoch=1
pkgver=2.0.0
pkgrel=1
pkgdesc="VA-API implementation for Intel G45 chipsets with H264 support."
arch=('i686' 'x86_64')
url='https://01.org/linuxmedia/vaapi'
pkgdesc='Video Acceleration (VA) API for Linux'
depends=('libdrm' 'libgl' 'glibc' 'libva>=2.0.0')
conflicts=('libva-intel-driver')
provides=('libva-intel-driver')
replaces=('libva-intel-driver')
optdepends=('libva-utils: Applications and Scripts for libva (vainfo and others)')
license=(MIT)
makedepends=(mesa)

source=(https://bitbucket.org/alium/g45-h264/downloads/intel-driver-g45-h264-$pkgver.tar.gz)

prepare () {
  cd intel-vaapi-driver
  # Only relevant if intel-gpu-tools is installed,
  # since then the shaders will be recompiled
  sed -i '1s/python$/&2/' src/shaders/gpp.py
}

build() {
  cd $srcdir/intel-vaapi-driver
  ./autogen.sh --prefix=/usr
  make
}


package() {
    cd intel-vaapi-driver
    make DESTDIR="${pkgdir}" install
    install -m644 -D COPYING ${pkgdir}/usr/share/licenses/${pkgname}/COPYING
}

sha256sums=('6b0df6853ac2a58eb5483d58adc0c837ea26e29d035da983f9c09783b76cc8ca')
