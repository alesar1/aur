# Maintainer: Antonio Rojas <arojas@archlinux.org>
# Contributor: Evgeniy Alekseev <arcanis.arch at gmail dot com>
# Contributor: Daniel Wallace <danielwallace at gtmanfred dot com>
# Contributor: Thomas Dziedzic <gostrc at gmail dot com>
# Contributor: Osman Ugus <ugus11 at yahoo dot com>
# Contributor: Stefan Husmann <stefan-husmann at t-online dot de>

pkgbase=sagemath-git
pkgname=(sagemath-git sagemath-jupyter-git)
pkgver=8.8.beta1.r0.g165d450f80
pkgrel=1
pkgdesc="Open Source Mathematics Software, free alternative to Magma, Maple, Mathematica, and Matlab"
arch=(x86_64)
url="http://www.sagemath.org"
license=(GPL)
depends=(ipython2 palp brial cliquer maxima-ecl gfan sympow nauty python2-rpy2 python2-fpylll python2-psutil python2-cypari2
  python2-matplotlib python2-scipy python2-sympy python2-networkx python2-pillow python2-pplpy python2-future
  gap flintqs lcalc lrcalc arb eclib zn_poly gd python2-cvxopt pynac linbox m4rie rubiks pari-galdata pari-seadata-small planarity rankwidth tachyon
  sage-data-combinatorial_designs sage-data-elliptic_curves sage-data-graphs sage-data-polytopes_db sage-data-conway_polynomials
  libgiac libhomfly libbraiding three.js)
optdepends=('cython2: to compile cython code' 'python2-pkgconfig: to compile cython code'
  'jmol: 3D plots' 'sage-notebook: Flask notebook interface (deprecated)'
  'sagemath-doc: Documentation and inline help' 'python2-igraph: igraph backend for graph theory'
  'coin-or-cbc: COIN backend for numerical computations' 'coin-or-csdp: for computing Lovász theta-function of graphs'
  'buckygen: for generating fullerene graphs' 'plantri: for generating some classes of graphs' 'benzene: for generating fusenes and benzenoids'
  'ffmpeg: to export animations to video' 'imagemagick: to show animations'
  'coxeter: Coxeter groups implementation'
  'lrs: Algorithms for linear reverse search used in game theory and for computing volume of polytopes'
  'libfes: exhaustive search of solutions for boolean equations' 'python2-pynormaliz: Normaliz backend for polyhedral computations'
  'latte-integrale: integral point count in polyhedra' 'polymake: polymake backend for polyhedral computations'
  'shared_meataxe: faster matrix arithmetic over finite fields' 'openblas: faster linear algebra'
  'sirocco: for computing the fundamental group of the complement of a plane curve' 'primecount: faster prime_pi implementation'
  'dot2tex: for displaying some diagrams' 'cryptominisat5: SAT solver' 'python2-pycosat: picosat SAT solver'
  'python2-pip: to install optional packages with sage -pip')
makedepends=(cython2 boost ratpoints symmetrica python2-jinja coin-or-cbc sirocco
  mcqd coxeter bliss tdlib python2-pkgconfig shared_meataxe libfes primecount git)
source=(git://git.sagemath.org/sage.git#branch=develop
        sagemath-env.patch
        package.patch
        latte-count.patch
        sagemath-python3-notebook.patch
        test-optional.patch
        fes02.patch
        sagemath-threejs.patch
        sagemath-cremona.patch
        sagemath-singular-4.1.2.patch
        sagemath-ecl-sigfpe.patch)
sha256sums=('SKIP'
            '1c2a2d750e81ac65a1dc07094f086ba07f4862288c935a1cd009cdd62bcfc23c'
            'b1068a8d5750051c2b5cfcb89d3d5870cf4233ab445e71c398543fb8b1e6281a'
            'b66d5bb692159910cec83c80262c43a687d3a678010c7ae4c7070f7cf3a0d5cb'
            '12cd410035ae644c2495b0dcd3a5138133a471ecc07912d37114c46ee837eb0e'
            'f12bd2a53ad51549015093aacc89978f4d796d9ab5bcd3d737aa0d57a5815b54'
            '7fcb52e96935dccb0f958d37c2f4e3918392480b9af53e08562f6cba6c68cb94'
            'e09910f0080a1b3f4167783f396f72fc2a5f4286cb1efb766aadb4b1463c02e7'
            '4c6df9e4e5a7b29ecf6189eda3e5a79f69b6e1b4d29c1b9559663149b8c0af96'
            '961bfb5694b67d425d21240d71490cb71714b5207c23448c89be0966512ff8f9'
            'a42f3b152b1aedb8abf16bc70971419919d1fe30328574e7fef8305f9d07d938')

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

# Upstream patches  
# fix build against libfes 0.2 http://trac.sagemath.org/ticket/15209
  patch -p1 -i ../fes02.patch
# use Features to detect Cremona databases https://trac.sagemath.org/ticket/25825
  patch -p1 -i ../sagemath-cremona.patch
# Fixes for singular 4.1.2 https://trac.sagemath.org/ticket/25993
  patch -p1 -i ../sagemath-singular-4.1.2.patch
# Fix SIGFPE crashes with ecl 16.1.3 https://trac.sagemath.org/ticket/22191
  patch -p1 -i ../sagemath-ecl-sigfpe.patch

# use python2
  sed -e 's|sage-python23|python2|' -e 's|#!/usr/bin/env python\b|#!/usr/bin/env python2|' -i src/bin/*
  sed -e 's|cython {OPT}|cython2 {OPT}|' -e 's|python setup.py|python2 setup.py|' -i src/sage/misc/cython.py
  sed -e 's|exec ipython\b|exec ipython2|' -e 's|cygdb|cygdb2|g' -i src/bin/sage
  sed -e "s|'cython'|'cython2'|" -i src/bin/sage-cython
  sed -e 's|"python"|"python2"|' -i src/sage/env.py
}

build() {
  cd sage/src

  export CC=gcc
  export SAGE_ROOT="$PWD"
  export SAGE_SRC="$PWD"
  export SAGE_NUM_THREADS=10

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
  depends=(sagemath python2-jupyter_client python2-ipywidgets jsmol)
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
