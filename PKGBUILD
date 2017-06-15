# Maintainer: Alexander Minges <alexander.minges@gmail.com>
pkgname=coot
pkgver=0.8.8
pkgrel=1
pkgdesc="Crystallographic Object-Oriented Toolkit for model building, completion and validation"
arch=('i686' 'x86_64')
url="http://lmb.bioch.ox.ac.uk/coot/"
license=('GPL')
replaces=('coot-data')
depends=('guile1.8' 'guile1.8-lib' 'guile1.8-gtk' 'guile1.8-gui' 'gtkglext' 'libccp4' 'clipper' 'goocanvas1' 'gsl' 'libgnomecanvas' 'imlib' 'swig'
         'freeglut' 'libgl' 'gtk2' 'cairo' 'libssm>=1.4.0-2' 'zlib' 'curl' 'python2' 'pygtk' 'gtkglarea' 'which' 'bc' 'sqlite' 'rdkit-python2' 'mmdb2>=2.0.12-4')
source=(http://www2.mrc-lmb.cam.ac.uk/personal/pemsley/$pkgname/source/releases/$pkgname-$pkgver.tar.gz
        https://www2.mrc-lmb.cam.ac.uk/personal/pemsley/$pkgname/dependencies/refmac-monomer-library.tar.gz
        https://www2.mrc-lmb.cam.ac.uk/personal/pemsley/$pkgname/dependencies/reference-structures.tar.gz
        coot-configure.ac.patch
        coot-makefile.patch
        coot-guile.patch
        coot-libguile.patch
        coot-utils.patch
        coot-rdkit.patch
        coot-lbg.patch
        coot-python.patch
        coot-lidia.patch
        coot-pyrogen.patch
        coot.in
        )

sha256sums=('df31ab66d7c3de6524fefcafaab6acc11e4525b930fed3b929ed773ae1776aa7'
            '03562eec612103a48bd114cfe0d171943e88f94b84610d16d542cda138e5f36b'
            '44db38506f0f90c097d4855ad81a82a36b49cd1e3ffe7d6ee4728b15109e281a'
            '2babfbc3cb798868d9e22f19ee49d12981fac35e3dfba2d8f7318716f59f673c'
            '9ad5a56116748ab5b1f77b2a4b2e3df47847ff881579105dff6589ed60ac8eb4'
            'c15e844536f512c2d5524391dbc046a889a0d5f8c23336b854508e453e226911'
            'aa1e18d4ef43fb61e85aba05d13797f9aa2beb1da220405f1eb6058ac36eb60b'
            '059d57dc092feb8134a95e6fa452a2d807ccb3666da374f4a023e5684e3a0dfa'
            '8b1c499ce5d506419ca72f999b6a0332a2edcc30e3128b1eb0bd3d399d0d80a6'
            '423a50d27639376c52e6987877acea908d854decb48c7c2452f7f5ecb92b60e9'
            'f4747e1fc7a3387f42b6c40358f999404761a0282ee6be3c621091d9d5d88099'
            'dd2eb7c66ff2fa6f68a9d1e834e1911d2a1669a76ed29b5dbd6863619edcba18'
            '987e41d1b8adf87c2b66e75c07ac85810381354b3b78cb708ebadd8bbada8251'
            '681606cc5e1cb832235f568a59df6738461afa8270a25c468b92920ef269a250')

build() {

  cd "$srcdir/$pkgname-$pkgver"

  patch -Np0 -i "$srcdir/coot-configure.ac.patch"
  patch -Np0 -i "$srcdir/coot-makefile.patch"
  patch -Np0 -i "$srcdir/coot-guile.patch"
  patch -Np1 -i "$srcdir/coot-libguile.patch"
  patch -Np0 -i "$srcdir/coot-utils.patch"
  patch -Np0 -i "$srcdir/coot-rdkit.patch"
  patch -Np0 -i "$srcdir/coot-lbg.patch"
  patch -Np0 -i "$srcdir/coot-python.patch"
  patch -Np0 -i "$srcdir/coot-lidia.patch"
  patch -Np0 -i "$srcdir/coot-pyrogen.patch"


  iconv -f iso8859-1 -t utf-8 README > README.conv && mv -f README.conv README

  cp $srcdir/coot.in src/

  aclocal -I macros
  libtoolize --automake --copy
  autoconf
  automake --copy --add-missing --gnu

  # Work around coot's code not beeing completely standard compliant
  CXXFLAGS="${CXXFLAGS} -fpermissive"

  ./configure --prefix=/usr \
              --with-python \
              --with-guile \
              --with-guile-gtk \
              --with-pygtk \
              --with-sqlite3 \
              --with-boost \
              --with-boost-python \
              --disable-static \
              --with-enhanced-ligand-tools RDKIT_LIBS="-lRDKitMolDraw2D -lRDKitForceFieldHelpers -lRDKitDescriptors -lRDKitForceField -lRDKitSubstructMatch -lRDKitOptimizer -lRDKitDistGeomHelpers -lRDKitDistGeometry -lRDKitAlignment -lRDKitEigenSolvers -lRDKitDepictor -lRDKitMolChemicalFeatures -lRDKitFileParsers  -lRDKitRDGeometryLib -lRDKitGraphMol -lRDKitSmilesParse -lRDKitDataStructs -lRDKitRDGeneral -lboost_python -lpython2.7" RDKIT_CXXFLAGS="-I/usr/include/rdkit"

  make
}

package() {
  cd "$srcdir/$pkgname-$pkgver"
  make DESTDIR="$pkgdir/" install
  sed -i 's|COOT_PYTHON_DIR=|COOT_PYTHON_DIR=/usr/lib/python2.7/site-packages/coot|' src/$pkgname
  sed -i 's|COOT_REFMAC_LIB_DIR=|COOT_REFMAC_LIB_DIR=/usr/share/coot/lib/|' src/$pkgname
  install -p -m 755 src/$pkgname $pkgdir/usr/bin

  # remove shebang from python scripts
  for lib in $(find $pkgdir/usr/lib/python2.7/site-packages/$pkgname/ -name "*.py"); do
    sed '/\/usr\/bin\/env/d' $lib > $lib.new &&
    touch -r $lib $lib.new &&
    mv $lib.new $lib
  done

  chmod 644 $pkgdir/usr/lib/python2.7/site-packages/$pkgname/$pkgname.py

  install -d $pkgdir/usr/share/$pkgname/reference-structures
  install -Dm644 $srcdir/reference-structures/*.pdb $pkgdir/usr/share/$pkgname/reference-structures/

  install -d $pkgdir/usr/share/$pkgname/lib/data/monomers
  cp -r $srcdir/monomers/* $pkgdir/usr/share/$pkgname/lib/data/monomers/
}
