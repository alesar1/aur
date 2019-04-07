# Maintainer:  Gabriel Souza Franco <Z2FicmllbGZyYW5jb3NvdXphQGdtYWlsLmNvbQ==>
# Contributor: Florian Pritz
# Contributor: Jonas Heinrich <onny@project-insanity.org>
# Contributor: Jordi De Groof <jordi (dot) degroof (at) gmail (dot) com>
# Contributor: mickele
# Contributor: manwithgrenade
# Contributor: bricem13
# Contributor: gborzi

pkgname=freecad
_pkgver=0.18
_count=16111
_commit=0dc75267fee2af948c3085002a2cc61758cc5b30
pkgver=$_pkgver.$_count
pkgrel=1
pkgdesc='A general purpose 3D CAD modeler'
arch=('x86_64')
url='https://www.freecadweb.org/'
license=('LGPL')
depends=('boost-libs' 'curl' 'opencascade>=7.2' 'xerces-c' 'libspnav' 'glew' 'netcdf'
         'shared-mime-info' 'hicolor-icon-theme' 'jsoncpp' 'qt5-base' 'qt5-declarative' 'qt5-svg' 'qt5-tools'
         'qt5-x11extras' 'qt5-webkit' 'med' 'python-pivy' 'python-pyside2' 'python-matplotlib' 'pyside2-tools')
makedepends=('boost' 'eigen' 'gcc-fortran' 'swig' 'xerces-c' 'desktop-file-utils' 'git'
             'cmake' 'coin>=4.0.0a' 'python-shiboken2' 'pyside2' 'shiboken2')
optdepends=('python-matplotlib' 'graphviz' 'openscad')
source=("git+https://github.com/FreeCAD/FreeCAD.git#commit=$_commit"
        "${pkgname}.desktop" "${pkgname}.xml")
sha256sums=('SKIP'
            '617968d7bbd1da71bdedaed1b66c5d6eaf24e0fb34678b93f5d925d370c66296'
            '1d98fa4e62f352966eb357c93f54b1f0bf562931e8323bf70a83b5e221a5fb14')

build() {
    cd "${srcdir}/FreeCAD"
    cmake . \
        -DCMAKE_BUILD_TYPE=Release \
        -DCMAKE_INSTALL_PREFIX="/usr/lib/freecad" \
        -DCMAKE_INSTALL_DOCDIR="/usr/share/freecad/doc" \
        -DCMAKE_INSTALL_DATADIR="/usr/share/freecad" \
        -DFREECAD_USE_OCC_VARIANT="Official Version" \
        -DFREECAD_USE_EXTERNAL_PIVY=ON \
        -DFREECAD_USE_QT_FILEDIALOG=ON \
        -DBUILD_QT5=ON \
        -DPYTHON_EXECUTABLE=/usr/bin/python
    make
}

package() {
    cd "${srcdir}/FreeCAD"

    make DESTDIR="${pkgdir}" install

    # Symlink to /usr/bin
    install -dm755 "${pkgdir}/usr/bin"
    ln -srf "${pkgdir}/usr/lib/freecad/bin/FreeCAD" "${pkgdir}/usr/bin/freecad"
    ln -srf "${pkgdir}/usr/lib/freecad/bin/FreeCAD" "${pkgdir}/usr/bin/FreeCAD"
    ln -srf "${pkgdir}/usr/lib/freecad/bin/FreeCADCmd" "${pkgdir}/usr/bin/freecadcmd"
    ln -srf "${pkgdir}/usr/lib/freecad/bin/FreeCADCmd" "${pkgdir}/usr/bin/FreeCADCmd"

    # Install pixmaps and desktop shortcut
    desktop-file-install \
        --dir="${pkgdir}/usr/share/applications" \
        "${srcdir}/${pkgname}.desktop"
    for i in 16 32 48 64; do
        install -Dm644 "src/Gui/Icons/freecad-icon-${i}.png" \
            "${pkgdir}/usr/share/icons/hicolor/${i}x${i}/apps/freecad.png"
    done
    install -Dm644 "src/Gui/Icons/freecad.svg" \
        "${pkgdir}/usr/share/icons/hicolor/scalable/apps/freecad.svg"

    # Mime info
    install -D -m644 "${srcdir}/freecad.xml" "${pkgdir}/usr/share/mime/packages/freecad.xml"
}
