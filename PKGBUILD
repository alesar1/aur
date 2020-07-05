# Maintainer: Fancy Zhang <springzfx@gmail.com>
pkgname=cgproxy
pkgver=0.18
pkgrel=1
pkgdesc="A transparent proxy program powered by cgroup2 and tproxy"
arch=('x86_64')
url="https://github.com/springzfx/cgproxy"
license=('GPL')
groups=('')
makedepends=('llvm' 'clang' 'cmake' 'nlohmann-json' 'libbpf')
depends=('gcc-libs' 'systemd' 'which' 'iproute2' 'libbpf')
provides=('cgproxy')
conflicts=('cgproxy')

source=("${pkgname}::git+https://github.com/springzfx/cgproxy#tag=v${pkgver}")
md5sums=('SKIP')

backup=('etc/cgproxy/config.json')
install='cgproxy.install'

build(){
    mkdir -p "${srcdir}/${pkgname}/build"
    cd "${srcdir}/${pkgname}/build"
    cmake -DCMAKE_BUILD_TYPE=Release \
          -DCMAKE_INSTALL_PREFIX=/usr \
          -Dbuild_execsnoop_dl=ON \
          -Dbuild_static=OFF \
          .. 
    make
}

package_cgproxy(){
    cd "${srcdir}/$pkgname"/build
    make DESTDIR=$pkgdir install
}
