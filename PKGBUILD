# Maintainer: Olivier Le Moal

pkgname=sdrangel-bin
pkgver=4.15.2
_subver=286
pkgrel=1
conflicts=(sdrangel-git)
pkgdesc="Qt5/OpenGL SDR and signal analyzer frontend."
url="https://github.com/f4exb/sdrangel"
arch=('x86_64')
license=('GPL3')

depends=('pkg-config' 'log4cpp' 'opencv' 'fftw' 'ffmpeg'
         'cm256cc' 'dsdcc' 'pulseaudio' 'lz4' 'nanomsg'
         'qt5-base' 'qt5-tools' 'qt5-multimedia' 'qt5-websockets')
optdepends=('ffmpeg: DATV demodulator')
provides=("sdrangel")
source=("https://github.com/f4exb/sdrangel/releases/download/v${pkgver}/sdrangel-${_subver}-master.tar.gz")
sha256sums=('7e87d05c673f6ec2f7523aa309bcae2afd009e1c258d4921bfa95de6caf1cd86')

prepare() {
    cd "sdrangel-${_subver}-master"
    # extract .deb data
    ar p sdrangel_${pkgver}-1_amd64.deb data.tar.xz | tar xJ
}

package() {
    cd "sdrangel-${_subver}-master"
    mv "usr/" ${pkgdir}
}

