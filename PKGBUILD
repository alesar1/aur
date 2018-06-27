# Maintainer: Frank Siegert < frank dot siegert at googlemail dot com >
# Contributor: Sebastien Binet binet-at-cern-ch
# Maintainer: Wainer Vandelli <wainer dot vandelli at gmail dot com>
# Contributor: Konstantin Gizdov < arch at kge dot pw >
pkgname=cvmfs
pkgver=2.5.0
pkgrel=2
pkgdesc="A client-server file system implemented in FUSE and developed to deliver software distributions onto virtual machines in a fast, scalable, and reliable way."
arch=('x86_64')
url="http://cernvm.cern.ch/portal/filesystem"
license=('BSD')
depends=('fuse2' 'curl' 'c-ares' 'leveldb' 'pacparser' 'sqlite' 'protobuf')
makedepends=('cmake' 'make' 'gtest' 'sparsehash' 'gmock')
backup=('etc/cvmfs/default.local')
install=cvmfs.install
options=('!emptydirs')
source=("https://ecsft.cern.ch/dist/$pkgname/$pkgname-$pkgver/$pkgname-$pkgver.tar.gz"
    'settings.cmake'
	'externals.patch'
	'sqlite-scratch.patch'
    'xattr.patch')
md5sums=('d46705e06267278fd3a65b277a6d9e16'
         '20dc60c61077f4a3711463e8686d260d'
         '109a95cab95276c1c19bc46b66f0906f'
         '0ef4c858aa9648dcd46768991748eb06'
         '08a46f14c08fe50b8d7cd33ec95ddda8')

prepare() {
    cd "$srcdir/$pkgname-$pkgver"

    # Tweak external packages
    # We remove all those that are provided by Arch/AUR and leave only
    # the ones not currently available
    patch -Np1 -i "$srcdir/externals.patch"

    # Sqlite deprecated the SCRATCH configuration option
    patch -Np1 -i "$srcdir/sqlite-scratch.patch"

    # Do not use attr/xattr.h as it is not installed in Arch
    patch -Np1 -i "$srcdir/xattr.patch"
}

build() {
    cd "$srcdir/$pkgname-$pkgver"
    mkdir -p build
    cd build
    cmake -C "${srcdir}/settings.cmake" ../

    make
}

package() {
    cd "$srcdir/$pkgname-$pkgver/build"
    make DESTDIR="$pkgdir/" install
    sed -e "s/\/etc\/auto.master/\/etc\/autofs\/auto.master/g" -i $pkgdir/usr/bin/cvmfs_config
    install -Dm644 "${srcdir}/${pkgname}-${pkgver}/COPYING" "${pkgdir}/usr/share/licenses/cvmfs/COPYING"

    echo "CVMFS_REPOSITORIES=atlas.cern.ch,atlas-condb.cern.ch,grid.cern.ch,sft.cern.ch,lhcb.cern.ch,lhcbdev.cern.ch" > $pkgdir/etc/cvmfs/default.local
    echo "CVMFS_HTTP_PROXY=DIRECT" >> $pkgdir/etc/cvmfs/default.local
}
