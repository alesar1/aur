# Maintainer: Kevin McCormack <harlemsquirrel@gmail.com>
# https://gitlab.com/lulzbot3d/cura-le/curabuild-lulzbot/
pkgname=cura-lulzbot-git
pkgver=v3.6.21.10.g9bc5c13
pkgrel=1
pkgdesc='Cura LulzBot Edition for LulzBot 3D Printers by Aleph Objects, Inc.'
arch=('x86_64')
url='https://www.lulzbot.com/cura'
license=('AGPL3')
source=('git+https://gitlab.com/lulzbot3d/cura-le/curabuild-lulzbot.git')
md5sums=('SKIP')
conflicts=("cura-lulzbot")
depends=('cython'
         'gcc-fortran'
         'libffi6'
         'libsavitar'
         'openblas'
         'python'
         'python-cx_freeze'
         'python-nose'
         'python-numpy'
         'python-numpy-stl'
         'python-opengl'
         'python-parso'
         'python-pyqt5'
         'python-scipy'
         'python-setuptools'
         'python-typing_extensions'
         'qt5-graphicaleffects'
         'qt5-quickcontrols'
         'qt5-quickcontrols2'
         'qt5-svg')
makedepends=('cmake'
             'git'
             'python-sip'
             'python-netifaces'
             'python-pyserial'
             'python-zeroconf'
             'qt5-tools'
             'sip')
optdepends=('python-zeroconf: Detecting mDNS printers'
            'python-pyserial: USB printing')

pkgver() {
  cd curabuild-lulzbot
  git describe --tags | sed 's/-/./g'
}

build() {
  mkdir -p curabuild-lulzbot/build
  cd curabuild-lulzbot/build
  sed -i 's/DCURA_ENGINE_VERSION=${CURA_VERSION}/DCURA_ENGINE_VERSION=${CURA_VERSION} -DENABLE_OPENMP=OFF/' ../CMakeLists.txt
  sed -i '33,34 s/^/#pkgbuild /' ../setup_linux.py.in # Disable missing paths from using system python
  sed -i '57,60 s/^/#pkgbuild /' ../setup_linux.py.in # Disable missing qt plugins when using system version
  sed -i 's/get_commit_hash("Savitar", cmake_binary_dir)/"4.1.0"/' ../scripts/cura_version.py #fake hash when using system libsavitar

  sed -i 's/6a4ffb2f90ef7bbd3f20f2a1db4948630ad37dc8/v3.11.0/' ../CMakeLists.txt # Protobuf

  sed -i '1224,1241 s/^/#pkgbuild /' ../CMakeLists.txt # Disable external cx_Freeze build

  cmake -DTAG_OR_BRANCH=master ../ \
        -DBUILD_PYTHON=OFF \
        -DBUILD_CYTHON=OFF \
        -DBUILD_QT=OFF \
        -DBUILD_SIP=OFF \
        -DBUILD_PYQT=OFF \
        -DBUILD_OPENBLAS=OFF \
        -DBUILD_NUMPY=OFF \
        -DBUILD_SCIPY=OFF \
        -DBUILD_SCIPY_LITE=OFF \
        -DBUILD_PYSERIAL=OFF \
        -DBUILD_NUMPY_STL=OFF \
        -DBUILD_ZEROCONF=OFF \
        -DBUILD_TYPING=OFF \
        -DBUILD_SAVITAR=OFF \
        -DBUILD_APPDIRS=OFF \
        -DBUILD_NETIFACES=OFF \
        -DBUILD_PYTHONSIX=OFF \
        -DBUILD_PYTHON_SETUPTOOLS=OFF \
        -DBUILD_PYTHON_PACKAGING=OFF \
        -DBUILD_PYPARSING=OFF \
        -DBUILD_PYTHON_NOSE=OFF \
        -DEXTERNALPROJECT_INSTALL_PREFIX=$pkgdir/usr \
        -DUSE_SYSTEM_LIBS=ON

  PYTHONPATH=`pwd`/inst/lib/python3/dist-packages make
}

package() {
  cd $srcdir/curabuild-lulzbot/build

  # We have to remove this since it's gone from Python 3.8
  # https://docs.python.org/3.7/library/platform.html#unix-platforms
  echo "pwd: $(pwd)"
  grep -rl 'linux_distro_name = platform.linux_distribution' . | xargs \
    sed -i 's/linux_distro_name/#linux_distro_name/g'

  PYTHONPATH=`pwd`/inst/lib/python3/dist-packages make package

  cp -r _CPack_Packages/Linux/DEB/cura-lulzbot-*-Linux/usr $pkgdir/
}

## Update md5sum
# updpkgsums

## Update .SRCINFO
# makepkg --printsrcinfo | tee .SRCINFO

##
# Build in a clean chroot
# https://wiki.archlinux.org/index.php/DeveloperWiki:Building_in_a_clean_chroot
#
# We need to install libffi6 and python-numpy-stl from AUR.
# We also need to manually install openblas to avoid a conflict with blas.
#
# Ex.
# extra-x86_64-build -- -c -I ~/builds/libffi6/libffi6-3.2.1-1-x86_64.pkg.tar.xz -I ~/builds/python-numpy-stl/python-numpy-stl-2.10.1-1-any.pkg.tar.xz -I /var/cache/pacman/pkg/openblas-0.3.10-1-x86_64.pkg.tar.zst
