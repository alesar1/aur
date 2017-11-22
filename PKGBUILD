# Maintainer: Luca Weiss <luca (at) z3ntu (dot) xyz>
# Contributor: Özgür Sarıer <echo b3pndXJzYXJpZXIxMDExNjAxMTE1QGdtYWlsLmNvbQo= | base64 -d>
# Maintainer: liberodark
 
pkgname=natron-git
name=natron
pkgver=2.3.3
pkgrel=10
pkgdesc="Open source compositing software. Node-graph based. Similar in functionalities to Adobe After Effects and Nuke by The Foundry."
arch=("i686" "x86_64")
url="https://github.com/mrkepzie/natron"
license=("GPL")
depends=('fontconfig' 'qt4' 'python2-pyside' 'python2-shiboken' 'boost-libs' 'pixman' 'glfw-x11' 'cairo')
makedepends=('git' 'expat' 'boost')
optdepends=('openfx-io-git' 'openfx-misc-git' 'openfx-arena-git: Extra 
OpenFX 
plugins for Natron includes text node' 'openfx-gmic-bin' 'natron-plugins' 'firejail-extras: Run Natron with an isolated enviorment')
com=9f53cbc91f7dfb1a00f3b3b84f5fbe68ab20d6ab
source=("$name::git+https://github.com/MrKepzie/Natron.git#commit=$com"
        "https://github.com/MrKepzie/OpenColorIO-Configs/archive/Natron-v${pkgver%.*}.tar.gz"
        "config.pri")


sha512sums=('SKIP'
            '42035f867188fcb7ec76f2f44a1d01b0c47bdc8aa94b22280e2691465ef135059e49ea5efa18d70c496b0319b8c888f3660ecbdb98bb5ba4a66d66dc77e21778'
            'SKIP')

prepare() {
  cd "$srcdir/$name"
  
  mv "$srcdir/OpenColorIO-Configs-Natron-v${pkgver%.*}" "$srcdir/$pkgname/OpenColorIO-Configs"

  # Git submodules
git submodule update --init --recursive


  mv "${srcdir}/config.pri" "${srcdir}/${pkgname%%-*}/config.pri"
  # Fix for gcc6 build issues
  sed -i '1s/^/QMAKE_CXXFLAGS += -std=c++98\n/' Gui/Gui.pro
  sed -i '1s/^/QMAKE_CXXFLAGS += -std=c++98\n/' Engine/Engine.pro
  sed -i '1s/^/QMAKE_CXXFLAGS += -std=c++98\n/' Tests/Tests.pro
}

build() {
  cd "$srcdir/$name"

  [[ -d build ]] && rm -r build; mkdir build; cd build

  qmake-qt4 -r "$srcdir/natron/Project.pro" PREFIX=/usr CONFIG+=release DEFINES+=QT_NO_DEBUG_OUTPUT QMAKE_CFLAGS_RELEASE="${CFLAGS}" QMAKE_CXXFLAGS_RELEASE="${CXXFLAGS}" QMAKE_LFLAGS_RELEASE="${LDFLAGS}"

  make
}

 package() {
  cd "$srcdir/$name/build"
  make INSTALL_ROOT="$pkgdir" install
 }
