# Maintainer: Luca Weiss <luca (at) z3ntu (dot) xyz>
# Contributor: Özgür Sarıer <echo b3pndXJzYXJpZXIxMDExNjAxMTE1QGdtYWlsLmNvbQo= | base64 -d>
# Maintainer: liberodark
 
pkgname=natron-git
pkgver=2.3.3
pkgrel=4
pkgdesc="Open source compositing software. Node-graph based. Similar in functionalities to Adobe After Effects and Nuke by The Foundry."
arch=("i686" "x86_64")
url="https://github.com/mrkepzie/natron"
license=("GPL")
depends=('fontconfig' 'qt4' 'python2-pyside' 'python2-shiboken' 'boost-libs' 'pixman' 'glfw-x11' 'cairo')
makedepends=('git' 'expat' 'boost')
optdepends=('openfx-io-git' 'openfx-misc-git' 'openfx-arena-git: Extra 
OpenFX 
plugins for Natron includes text node' 'openfx-gmic-bin' 'natron-plugins' 'firejail-extras: Run Natron with an isolated enviorment')

source=("$pkgname::git+https://github.com/MrKepzie/Natron.git#commit=fe3b773a00a206e49ad0cc684a8f7e00a287afd7"
        "https://github.com/MrKepzie/OpenColorIO-Configs/archive/Natron-v${pkgver%.*}.tar.gz"
        "config.pri")


sha512sums=('SKIP'
            '42035f867188fcb7ec76f2f44a1d01b0c47bdc8aa94b22280e2691465ef135059e49ea5efa18d70c496b0319b8c888f3660ecbdb98bb5ba4a66d66dc77e21778'
            'fcad21ac9ea0c3186f5998b340a02816b45880b2c7566c6aa8e65f12a3c6feec171c8c9415c4f5be9f957e9c40a94f81ef5c2754ac337cad6904ab6afb42bbcf')

prepare() {
  cd "$srcdir/$pkgname"
  
  mv "$srcdir/OpenColorIO-Configs-Natron-v${pkgver%.*}" "$srcdir/$pkgname/OpenColorIO-Configs"

  # Git submodules
git submodule update --init --recursive

  cd libs/SequenceParsing
  git config submodule.tinydir.url $srcdir/tinydir
git submodule update --init --recursive
  cd ../..

  mv "${srcdir}/config.pri" "${srcdir}/${pkgname%%-*}/config.pri"
  # Fix for gcc6 build issues
  sed -i '1s/^/QMAKE_CXXFLAGS += -std=c++98\n/' Gui/Gui.pro
  sed -i '1s/^/QMAKE_CXXFLAGS += -std=c++98\n/' Engine/Engine.pro
  sed -i '1s/^/QMAKE_CXXFLAGS += -std=c++98\n/' Tests/Tests.pro
}

build() {
  cd "$srcdir/$pkgname"

  [[ -d build ]] && rm -r build; mkdir build; cd build

  qmake-qt4 -r "$srcdir/natron/Project.pro" PREFIX=/usr CONFIG+=release DEFINES+=QT_NO_DEBUG_OUTPUT QMAKE_CFLAGS_RELEASE="${CFLAGS}" QMAKE_CXXFLAGS_RELEASE="${CXXFLAGS}" QMAKE_LFLAGS_RELEASE="${LDFLAGS}"

  make
}

 package() {
  cd "$srcdir/$pkgname/build"
  make INSTALL_ROOT="$pkgdir" install
 }
