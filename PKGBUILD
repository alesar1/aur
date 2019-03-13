# Maintainer: Sebastian Eberhardt <gpgpu_blog@protonmail.com>
# Contributor: epitron <chris@ill-logic.com>
# Contributor: Anatol Pomozov <anatol dot pomozov at gmail>
# Contributor: Stéphane Gaudreault <stephane@archlinux.org>
#
pkgname=openmpi-cuda
_pkgname=openmpi
pkgver=4.0.0
pkgrel=1
pkgdesc="High Performance Message Passing Library (MPI) compiled with CUDA support enabled"
arch=('x86_64')
url="https://www.open-mpi.org/"
license=('BSD')
groups=()
depends=('libsystemd' 'libnl' 'numactl' 'libpciaccess' 'cuda' 'hwloc')
makedepends=('git' 'valgrind' 'gcc-fortran' 'hwloc')
provides=("${pkgname%-cuda}")
conflicts=("${pkgname%-cuda}")
optdepends=('gcc-fortran: fortran support')
options=(staticlibs)
source=(https://www.open-mpi.org/software/ompi/v${pkgver%.*}/downloads/${_pkgname}-${pkgver}.tar.bz2)
sha256sums=('2f0b8a36cfeb7354b45dda3c5425ef8393c9b04115570b615213faaa3f97366b')


build() {
   cd openmpi-$pkgver

   ./configure --prefix=/usr \
               --sysconfdir=/etc/openmpi \
               --enable-mpi-fortran=all \
               --libdir=/usr/lib/${_pkgname} \
               --with-threads=posix \
               --enable-smp-locks \
               --with-valgrind \
               --enable-memchecker \
               --enable-pretty-print-stacktrace \
               --without-slurm \
               --with-hwloc=/usr \
               --with-cuda=/opt/cuda/include \
               --with-libltdl=/usr  \
               LDFLAGS="$LDFLAGS -Wl,-z,noexecstack"

   make -j8
}

check() {
   cd $_pkgname-$pkgver

   make check
}

package() {
   cd $_pkgname-$pkgver
   make DESTDIR="$pkgdir" install

   # FS#28583
   install -d -m 755 "$pkgdir"/usr/lib/pkgconfig
   for i in ompi-c.pc ompi-cxx.pc ompi.pc; do
      ln -sf /usr/lib/$_pkgname/pkgconfig/$i "$pkgdir"/usr/lib/pkgconfig/
   done

   install -d -m 755 "$pkgdir"/etc/ld.so.conf.d
   echo "/usr/lib/$_pkgname" > "$pkgdir"/etc/ld.so.conf.d/$_pkgname.conf

   install -Dm644 LICENSE "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}
