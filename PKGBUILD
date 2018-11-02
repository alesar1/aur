# Maintainer: Antonio Rojas <arojas@archlinux.org>
# Contributor: Evgeniy Alekseev <arcanis.arch at gmail dot com>
# Contributor: Daniel Wallace <danielwallace at gtmanfred dot com>
# Contributor: Thomas Dziedzic <gostrc at gmail dot com>
# Contributor: Osman Ugus <ugus11 at yahoo dot com>
# Contributor: Stefan Husmann <stefan-husmann at t-online dot de>

pkgbase=sagemath-git
pkgname=(sagemath-git sagemath-jupyter-git)
pkgver=8.5.beta2.r0.g0082a23a2e
pkgrel=1
pkgdesc="Open Source Mathematics Software, free alternative to Magma, Maple, Mathematica, and Matlab"
arch=(x86_64)
url="http://www.sagemath.org"
license=(GPL)
depends=(ipython2 ppl palp brial cliquer maxima-ecl gfan sympow nauty python2-rpy2 python2-fpylll python2-psutil python2-cypari2
  python2-matplotlib python2-scipy python2-sympy python2-networkx python2-pillow python2-future libgap flintqs lcalc lrcalc arb
  eclib gmp-ecm zn_poly gd python2-cvxopt pynac linbox rubiks pari-galdata pari-seadata-small planarity rankwidth tachyon
  sage-data-combinatorial_designs sage-data-elliptic_curves sage-data-graphs sage-data-polytopes_db sage-data-conway_polynomials
  libgiac libhomfly libbraiding three.js openblas)
optdepends=('cython2: to compile cython code' 'python2-pkgconfig: to compile cython code'
  'jmol: 3D plots' 'sage-notebook: Flask notebook interface (deprecated)'
  'sagemath-doc: Documentation and inline help' 'python2-igraph: igraph backend for graph theory'
  'coin-or-cbc: COIN backend for numerical computations' 'coin-or-csdp: for computing Lovász theta-function of graphs'
  'buckygen: for generating fullerene graphs' 'plantri: for generating some classes of graphs' 'benzene: for generating fusenes and benzenoids'
  'ffmpeg: to export animations to video' 'imagemagick: to show animations'
  'coxeter: Coxeter groups implementation' 'gap-4.8-data: for computing Galois groups'
  'lrs: Algorithms for linear reverse search used in game theory and for computing volume of polytopes'
  'libfes: exhaustive search of solutions for boolean equations' 'python2-pynormaliz: Normaliz backend for polyhedral computations'
  'latte-integrale: integral point count in polyhedra' 'polymake: polymake backend for polyhedral computations'
  'shared_meataxe: faster matrix arithmetic over finite fields'
  'sirocco: for computing the fundamental group of the complement of a plane curve' 'primecount: faster prime_pi implementation'
  'dot2tex: for displaying some diagrams' 'cryptominisat5: SAT solver' 'python2-pycosat: picosat SAT solver'
  'python2-pip: to install optional packages with sage -pip')
makedepends=(cython2 boost ratpoints symmetrica python2-jinja coin-or-cbc sirocco
  mcqd coxeter bliss-graphs tdlib python2-pkgconfig shared_meataxe libfes primecount git)
source=(git://git.sagemath.org/sage.git#branch=develop
        sagemath-env.patch
        package.patch
        latte-count.patch
        sagemath-python3-notebook.patch
        test-optional.patch
        fes02.patch
        sagemath-threejs.patch
        sagemath-cremona.patch
        sagemath-lcalc-c++11.patch
        sagemath-gap-4.8.patch
        sagemath-sphinx-1.8.patch
        sagemath-networkx-2.2.patch
        sagemath-cython-0.29.patch
        sagemath-cypari2.patch)
sha256sums=('SKIP'
            '6032ec3d0c983e70d4daa1391bc5daa0c948d350f3697932fc2e8472f0778037'
            '960afe4fcbffe2762b66119b8f14355386ced0d8ee52b535d0dac1dba90d365b'
            'ef265f88ceb6caf4aac2d86ea74850861d99a63d11c94fc52b2ce88053c26d1e'
            '769fd5a9c377be61de41e1e30004dadb23818da901cceb6e1bece7712ba7cb83'
            '3a0ebda1df708f263be830751cc5ddb430ca1f685b25b08d4b6592b65b123ebe'
            '7fcb52e96935dccb0f958d37c2f4e3918392480b9af53e08562f6cba6c68cb94'
            '4722f9257f7b58a5dc8be2e9163ebba6d7b3ee011ff1ab9c0dbfb1330d367261'
            '7efb38ba511037feb3abbd88576323320555ba50235ddc7e3d423ca294dd42ed'
            '5114c912f821900e5bfae1e2cfeb7984de946d0b23e1182b0bf15be1d803dfd0'
            '7304d6242bf0e8241d3d83b772d92f00f905c425b894d36a25c264edca279986'
            '7dd2ab94fddda8e7c2cdd5250642c4cdd00b7702815d88762fbcd68416bacaee'
            'a011fac2db31c3076fb8fc59e959fd9a9dc785ad3897f4fe3b3bd00b466cde83'
            'd1af7916e21d0a4de7b3ab5d4054c6b3175b84551ea6639a2680e6102c0b990b'
            '1677bcaa3fe19bf978b6ffaae7b64b7ec32df63fa3d0e28b179cfa831fcfa896')

pkgver() {
  cd sage
  git describe --long --tags | sed -r 's/([^-]*-g)/r\1/;s/-/./g'
}

prepare(){
  cd sage

# Arch-specific patches
# assume all optional packages are installed
  patch -p0 -i ../package.patch
# set env variables
  patch -p0 -i ../sagemath-env.patch
# don't list optional packages when running tests
  patch -p0 -i ../test-optional.patch
# use correct latte-count binary name
  patch -p1 -i ../latte-count.patch
# make 'sage -notebook=jupyter' work with our python3 jupyter-notebook package
  patch -p1 -i ../sagemath-python3-notebook.patch
# fix three.js plotting backend
  patch -p1 -i ../sagemath-threejs.patch
# don't force c++98 for lcalc (fixes build with NTL 11)
  patch -p1 -i ../sagemath-lcalc-c++11.patch
# Adjust paths for gap-4.8
  patch -p1 -i ../sagemath-gap-4.8.patch
# fix introspection with sphinx 1.8
  patch -p1 -i ../sagemath-sphinx-1.8.patch

# Upstream patches  
# fix build against libfes 0.2 http://trac.sagemath.org/ticket/15209
  patch -p1 -i ../fes02.patch
# use Features to detect Cremona databases https://trac.sagemath.org/ticket/25825
  patch -p1 -i ../sagemath-cremona.patch
# Fix graph generators with networkx 2.2 https://trac.sagemath.org/ticket/26326
  patch -p1 -i ../sagemath-networkx-2.2.patch
# Fix build with cython 0.29 https://trac.sagemath.org/ticket/25292
  patch -p1 -i ../sagemath-cython-0.29.patch
# Fix build with cypari 2.0 https://trac.sagemath.org/ticket/26442
  patch -p1 -i ../sagemath-cypari2.patch

# use python2
  sed -e 's|sage-python23|python2|' -e 's|#!/usr/bin/env python\b|#!/usr/bin/env python2|' -i src/bin/*
  sed -e 's|cython {OPT}|cython2 {OPT}|' -e 's|python setup.py|python2 setup.py|' -i src/sage/misc/cython.py
  sed -e 's|exec ipython\b|exec ipython2|' -e 's|cygdb|cygdb2|g' -i src/bin/sage
  sed -e "s|'cython'|'cython2'|" -i src/bin/sage-cython
}

build() {
  cd sage/src

  export CC=gcc
  export SAGE_ROOT="$PWD"
  export SAGE_SRC="$PWD"

  python2 setup.py build
}

package_sagemath-git() {
  optdepends+=('sagemath-jupyter: Jupyter kernel')
  conflicts=(sagemath)
  provides=(sagemath)

  cd sage/src

  export SAGE_ROOT="$PWD"
  export SAGE_LOCAL="/usr"
  export SAGE_EXTCODE="$PWD"/ext

  python2 setup.py install --root="$pkgdir" --optimize=1

  mkdir -p "$pkgdir"/usr/bin
  cp bin/{sage,math-readline} "$pkgdir"/usr/bin
  for _i in cachegrind callgrind cleaner coverage coverageall cython env eval grep grepdoc inline-fortran ipynb2rst \
    ipython massif maxima.lisp native-execute notebook num-threads.py omega open preparse python rst2sws rst2txt run \
    run-cython runtests startuptime.py sws2rst valgrind version.sh
  do
    cp bin/sage-$_i "$pkgdir"/usr/bin
  done
  
  mkdir -p "$pkgdir"/usr/share/sage
  cp -r ext "$pkgdir"/usr/share/sage
  
# Remove sage_setup
  rm -r "$pkgdir"/usr/lib/python2.7/site-packages/sage_setup

# Split jupyter kernel
  rm -r "$pkgdir"/usr/share/jupyter
}

package_sagemath-jupyter-git() {
  pkgdesc='Jupyter kernel for SageMath'
  depends=(sagemath python2-jupyter_client python2-ipywidgets mathjax jsmol)
  optdepends=('sage-notebook-exporter: convert flask notebooks to Jupyter')

  cd sage/src

  export SAGE_ROOT="$PWD"
  export SAGE_LOCAL="/usr"

  python2 -c "from sage.repl.ipython_kernel.install import SageKernelSpec; SageKernelSpec.update(prefix='$pkgdir/usr')"
# fix symlinks to assets
  for _i in $(ls ext/notebook-ipython); do
    rm "$pkgdir"/usr/share/jupyter/kernels/sagemath/$_i
    ln -s /usr/share/sage/ext/notebook-ipython/$_i "$pkgdir"/usr/share/jupyter/kernels/sagemath/
  done
}
