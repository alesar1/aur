# Maintainer: M. Mastroeni The_Maxtro@hotmail.it>
# Contributor: Xwang <xwaang1976@gmail.com>

pkgname=openmodelica-git
pkgver=1.14.0.dev.r334.g4e226ae04
pkgrel=2
pkgdesc="The Open Source Modelica Suite"
arch=('i686' 'x86_64')
url="https://openmodelica.org"
license=('OSMC-PL')
depends=('java-environment' 'lpsolve' 'hdf5-openmpi' 'omniorb' 'openscenegraph' 'sundials' 'libatomic_ops' 'python' 'gtkglext' 'ruby' 'coin-or-ipopt' 'qjson' 'suitesparse' 'boost-libs' 'qt5-webkit' 'qt5-svg' 'qt5-tools' 'gnuplot')
makedepends=('autoconf' 'automake' 'libtool' 'gcc' 'gcc-fortran-multilib' 'boost' 'clang' 'cmake' 'jre7-openjdk' 'antlr2' 'subversion' 'lib32-expat' 'lib32-ncurses' 'lib32-readline')
provides=('openmodelica')
conflicts=('openmodelica' 'openmodelica-svn' 'openmodelica-dev')

prepare() {
    # clone all submodules
    mkdir -p "$srcdir/$pkgname"
    if [ ! -d "$srcdir/$pkgname/.git" ]; then
        git clone https://github.com/OpenModelica/OpenModelica "$srcdir/$pkgname"
        echo "***** CLONING COMPLETED!!!!! ****"
    fi
    cd "$srcdir/$pkgname"
    sed -i 's,../,https://github.com/OpenModelica/,g' .gitmodules
    git submodule sync
    git submodule update --init --recursive
    cd "$srcdir"
    cd "$srcdir/$pkgname"
}
 
pkgver() {
    cd "$pkgname"
    git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}
 
build() {
cd "$srcdir/$pkgname"
    autoconf
    export CPPFLAGS="$CPPFLAGS -DH5_USE_18_API"
    ./configure --prefix=/usr/ CC=clang CXX=clang++
    make
}
 
package() {  
    cd "$srcdir/$pkgname"  
    make install DESTDIR=${pkgdir}
   
    install -D -m644 "OMEdit/OMEdit/OMEditGUI/Resources/icons/omedit.ico" "${pkgdir}/usr/share/openmodelica/icons/omedit.ico"
    install -D -m644 "OMNotebook/OMNotebook/OMNotebookGUI/Resources/OMNotebook_icon.ico" "${pkgdir}/usr/share/openmodelica/icons/omnotebook.ico"
    install -D -m644 "OMOptim/OMOptim/GUI/Resources/omoptim.ico" "${pkgdir}/usr/share/openmodelica/icons/omoptim.ico"
    install -D -m644 "OMShell/OMShell/OMShellGUI/Resources/omshell.ico" "${pkgdir}/usr/share/openmodelica/icons/omshell.ico"
    install -D -m644 "OMPlot/OMPlot/OMPlotGUI/Resources/icons/omplot.ico" "${pkgdir}/usr/share/openmodelica/icons/omplot.ico"
    install -D -m644 "OMCompiler/COPYING" "${pkgdir}/usr/share/licenses/openmodelica/LICENSE"
}
