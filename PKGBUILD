# Maintainer: Ivan Marquesi Lerner <ivanmlerner@protonmail.com>

pkgname=lc0
pkgver=0.21.4
pkgrel=1
_run="run1"
_nnid=42850
pkgdesc="UCI-compliant chess engine designed to play chess via neural network, specifically those of the LeelaChessZero project."
arch=('x86_64')

url="https://lczero.org/"
license=('GPL3')

depends=('protobuf' 'ocl-icd')
makedepends=('meson' 'zlib')
checkdepends=('gtest')
optdepends=("nvidia: Necessary for running on nvidia GPUs"
	    "cudnn:  xNeural network library for use with nvidia GPUs"
	    "intel-compute-runtime: Intel OpenCL runtime for \
	    			    running on intel CPUs"
	    "amdapp-sdk:  AMD OpenCL runtime for running on amd CPUs"
	    "openblas:    Library for running on CPUs"
	    "opencl-mesa: Free runtime for use with AMDGPU driver stack"
	    "opencl-amd:  AMD proprietary userspace driver \
	    		  for AMDGPU driver stack"
	    "rocm-opencl-runtime:    AMD runtime for ROCm GPU driver stack"
	    "opencl-amdgpu-pro-orca: AMD proprietary runtime for legacy \
	    			     GPUs on the AMDGPU PRO driver stack"
	    "opencl-amdgpu-pro-pal:  AMD proprietary runtime for the \
	    			     AMDGPU PRO driver stack")

install=lc0.install
source=("$pkgname"
	"$pkgname-$pkgver.tar.gz::https://github.com/LeelaChessZero/$pkgname/archive/v$pkgver.tar.gz"
	"lczero-common-master.tar.gz::https://github.com/LeelaChessZero/lczero-common/archive/master.tar.gz"
	"weights_${_run}_${_nnid}.pb.gz::http://data.lczero.org/files/networks/00af53b081e80147172e6f281c01daf5ca19ada173321438914c730370aa4267")
md5sums=('SKIP'
	 '9f9cbb2f9c63311201150bbe63f45440'
         'c793a41a73cd20f8efd964152d6eeb18'
         'e7c9e1abec8d859ffdbc89e18340c254')

noextract=('weights_${_run}_${_nnid}.pb.gz')

prepare() {
  cp -PRu "$srcdir/lczero-common-master/proto" "$srcdir/$pkgname-$pkgver/libs/lczero-common/"
  rm -dr "$srcdir/lczero-common-master"
  rm -f  "$srcdir/$pkgname-$pkgver/build-cl.cmd"
  rm -f  "$srcdir/$pkgname-$pkgver/build-cuda.cmd"
  rm -f  "$srcdir/$pkgname-pkgver/install_openSUSE_lc0.sh"
  rm -f  "$srcdir/$pkgname-pkgver/windows_build.md"
}

build() {
  cd "$pkgname-$pkgver"
  sh build.sh 
}

check() {
  cd "$pkgname-$pkgver/build/release"
  gtester chessboard_test
  gtester encoder_test
  gtester hashcat_test
  gtester optionsparser_test
  gtester position_test
  gtester syzygy_test
}

package() {
  install -Dm755 "$srcdir/$pkgname" "$pkgdir/usr/bin/$pkgname"
  install -Dm755 "$srcdir/$pkgname-$pkgver/build/release/$pkgname" "$pkgdir/usr/lib/$pkgname/$pkgname"
  install -Dm644 "$srcdir/weights_${_run}_${_nnid}.pb.gz" "$pkgdir/usr/lib/$pkgname/weights_${_run}_${_nnid}.pb.gz"
}
