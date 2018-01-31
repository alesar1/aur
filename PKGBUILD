# Maintainer: XavierCLL <xavier.corredor.llano (a) gmail.com>
# Contributor: richli

pkgname=hdf-eos5
pkgver=1.16
pkgrel=1
pkgdesc="The HDF-EOS5 is a software library designed built on HDF5 to support the same Grid/Point/Swath functionality in HDF-EOS 2 and to the extent possible it will be built with the same calling sequences as the original HDF-EOS 2 library."
url="http://www.hdfeos.org/software/library.php"
license=('GPL')
arch=('i686' 'x86_64')
depends=('libaec' 'hdf5_18' 'gdal' 'hdf-eos-common')
options=('libtool' 'staticlibs')
source=(ftp://edhs1.gsfc.nasa.gov/edhs/hdfeos5/latest_release/HDF-EOS5.$pkgver.tar.Z 'patches.tar.gz')
md5sums=('c4a3286f38a2faafc840017af4bd39d6'
         '0d0285e6f81f24a961adf9d9f84973ce')

prepare() {
  cd "$srcdir/hdfeos5"
  # patches
  #patch -Np1 --ignore-whitespace -i "$srcdir/patches/pthreads.patch"
  patch -Np1 --ignore-whitespace -i "$srcdir/patches/pkg-config.patch"
  patch -Np1 --ignore-whitespace -i "$srcdir/patches/configure.patch"
  patch -Np1 --ignore-whitespace -i "$srcdir/patches/gctp_remove.patch"
  patch -Np1 --ignore-whitespace -i "$srcdir/patches/libtool_fixes.patch"
  patch -Np1 --ignore-whitespace -i "$srcdir/patches/hdf5_transition.patch"
  patch -Np1 --ignore-whitespace -i "$srcdir/patches/hdf_hl.patch"
  #patch -Np1 --ignore-whitespace -i "$srcdir/patches/strcpy-overlap.patch"
  patch -Np1 --ignore-whitespace -i "$srcdir/patches/fix_HE5_EHHEisHE5.patch"
}

build() {
  cd "$srcdir/hdfeos5"
  #export LDFLAGS="-lhe5_hdfeos -lGctp -lhdf5_hl -lhdf5 -ljpeg -lz -lsz -lm"
  export LDFLAGS="-lhdf5_hl -lhdf5 -ljpeg -lz -lsz -lm"

  export CFLAGS="-D_HDFEOS5_THREADSAFE ${CFLAGS/O2/O0}"
  export CXXFLAGS="${CFLAGS}"
  export CC="/usr/bin/h5cc_18"
  #export CPPFLAGS="-Df2cFortran -I/usr/include"
  
  ./configure CC=/usr/bin/h5cc_18 --with-hdf5=/usr --with-zlib=/usr --prefix=/usr \
    --disable-static \
    --enable-static=no \
    --enable-hl \
    --enable-threadsafe \
    --enable-linux-lfs \
    --enable-production=yes \
    --enable-parallel=yes \
    --with-pic \
    --docdir=/usr/share/doc/hdf5/ \
    --with-pthread=/usr/lib/ \
    --enable-install-include \
    --enable-cxx \
    --disable-sharedlib-rpath

  make
  #make check
}

package() {
  cd "$srcdir/hdfeos5"
  make DESTDIR="$pkgdir" install
  
  # delete common files
  rm "$pkgdir"/usr/include/{cfortHdf.h,cproj.h,ease.h,isin.h,proj.h,bcea.h,cproj_prototypes.h,gctp_prototypes.h}
  
  #install example
  install -d -m755 "$pkgdir/usr/share/doc/hdf-eos5"
  install -m644 samples/* "$pkgdir/usr/share/doc/hdf-eos5/"
}
