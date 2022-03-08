# Maintainer: heavysink <winstonwu91@gmail.com>
_pkgname=eka2l1
pkgname="${_pkgname}-git"
pkgver=5279.0c5314e82
pkgrel=2
pkgdesc="Experimental Symbian OS emulator (GIT version)"
arch=('x86_64')
url="https://github.com/EKA2L1/EKA2L1"
license=('GPL2')
makedepends=(
	'boost'
	'cmake'
	'git'
	'ccache'
    'glfw'
    'vulkan-headers'
    'python'
    'qt5-tools'
)
depends=(
	'boost-libs'
  'qt5-base'
  'qt5-svg'
    'freetype2'
    'pango'
	'vulkan-icd-loader'
  'gtk3'
  'sdl2'
)
provides=('eka2l1')
conflicts=('eka2l1')
source=(
	"${_pkgname}-git::git+https://github.com/EKA2L1/EKA2L1.git"
  "eka2l1"
)
md5sums=('SKIP'
         '904f15dfd859ab3c10d7f1b9a78db41d')

pkgver() {
	cd "${_pkgname}-git"
	printf "%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
	cd "${srcdir}/${_pkgname}-git"
	git submodule update --recursive --init
    sed -i 's/constexpr size_t signal_stack_size = std::max(SIGSTKSZ/const size_t signal_stack_size = std::max<size_t>(SIGSTKSZ/g' src/external/dynarmic/src/backend/x64/exception_handler_posix.cpp 
}

build() {
	cd "${srcdir}/${_pkgname}-git"

    cmake -B build -DCMAKE_BUILD_TYPE=Release -DEKA2L1_NO_TERMINAL=ON -DEKA2L1_ENABLE_UNEXPECTED_EXCEPTION_HANDLER=ON -DEKA2L1_BUILD_VULKAN_BACKEND=OFF -DCMAKE_INSTALL_PREFIX=/opt/eka2l1 .

    cd build

    make
}

package() {
	cd "${srcdir}/${_pkgname}-git/build"

 install -d -m 755 "${pkgdir}/opt"
 install -d -m 777 "${pkgdir}/opt/eka2l1"
 install -d -m 755 "${pkgdir}/usr/bin"
 cp -R "${srcdir}/${_pkgname}-git/build/bin/." "${pkgdir}/opt/eka2l1"
 install -m 755 ${srcdir}/eka2l1 "${pkgdir}/usr/bin/eka2l1"
}
