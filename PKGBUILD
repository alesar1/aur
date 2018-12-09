# Maintainer: Artem Klevtsov <a.a.klevtso@gmail.com>
# Contributor: Conor Anderson <conor@conr.ca>

pkgname=rstudio-desktop-git
_gitname=rstudio
pkgver=1.2.679.r1432
_gwtver=2.8.1
_ginver=2.1.2
_qtver=5.10.1
pkgrel=1
pkgdesc="A powerful and productive integrated development environment (IDE) for R programming language"
arch=('i686' 'x86_64')
url="https://www.rstudio.com/products/rstudio/"
license=('AGPL3')
depends=('boost-libs>=1.63' 'r>=2.11.1' hicolor-icon-theme shared-mime-info pango hunspell-en_US mathjax pandoc clang qt5-base qt5-declarative qt5-location qt5-sensors qt5-svg qt5-webengine qt5-xmlpatterns)
makedepends=(git 'cmake>=2.8' 'boost>=1.63' jdk8-openjdk apache-ant unzip openssl libcups pam patchelf wget)
optdepends=('git: for git support'
            'subversion: for subversion support'
            'openssh-askpass: for a git ssh access')
provides=('rstudio-desktop' 'rstudio-desktop-bin' 'rstudio-desktop-preview')
conflicts=('rstudio-desktop' 'rstudio-desktop-bin' 'rstudio-desktop-preview')
source=("git+https://github.com/rstudio/rstudio.git"
        "https://s3.amazonaws.com/rstudio-buildtools/gin-${_ginver}.zip"
        "https://s3.amazonaws.com/rstudio-buildtools/gwt-${_gwtver}.zip"
        "https://s3.amazonaws.com/rstudio-buildtools/QtSDK-${_qtver}-x86_64.tar.gz"
        "rstudio.sh")
sha256sums=('SKIP'
            'b98e704164f54be596779696a3fcd11be5785c9907a99ec535ff6e9525ad5f9a'
            '0b7af89fdadb4ec51cdb400ace94637d6fe9ffa401b168e2c3d372392a00a0a7'
            'ae03692654882dea9ea428340731dd13ee1e2c7b3c89744e855d5424f7b941ee'
            '7bfb6c3ab47a52e49b9dce07623b277f7caee4be17031db423fc4b6045fe52f1')
noextract=("gin-${_ginver}.zip")

pkgver() {
    cd "${srcdir}/${_gitname}"
    git describe --long --tags | sed 's/^v//;s/\([^-]*\)-g.*/r\1/;s/-/./g'
}

prepare() {
    msg "Extracting dependencies..."
    cd "${srcdir}/${_gitname}/src/gwt"
    install -d lib/{gin,gwt}
    install -d lib/gin/${_ginver}
    install -d lib/gwt/${_gwtver}
    unzip -qo "${srcdir}/gin-${_ginver}.zip" -d lib/gin/${_ginver}
    cp -r "${srcdir}/gwt-${_gwtver}/"* lib/gwt/${_gwtver}

    cd "${srcdir}/${_gitname}/dependencies/common"
    install -d pandoc
 
    ln -sfT /usr/share/myspell/dicts dictionaries
    ln -sfT /usr/share/mathjax mathjax-26
    ln -sfT /usr/bin/pandoc pandoc/pandoc
    ln -sfT /usr/bin/pandoc-citeproc pandoc/pandoc-citeproc
 
    msg "Downloading and installing R packages..."
    bash install-packages
}

build() {
    rm -rf "${srcdir}/${_gitname}/build"
    mkdir "${srcdir}/${_gitname}/build"
    cd "${srcdir}/${_gitname}/build"
    export QT_SDK_DIR="${srcdir}/Qt${_qtver}"
    cmake -DRSTUDIO_TARGET=Desktop \
          -DCMAKE_BUILD_TYPE=Release \
          -DCMAKE_INSTALL_PREFIX=/usr/lib/rstudio \
          -DQT_QMAKE_EXECUTABLE="${srcdir}/Qt${_qtver}/${_qtver}/gcc_64/bin/qmake" \
          -DRSTUDIO_BUNDLE_QT=TRUE ..
}

package() {
    cd "${srcdir}/${_gitname}/build"
    # Install the program
    make DESTDIR="${pkgdir}" install
    # Install the license
    install -Dm 644 ../COPYING "${pkgdir}/usr/share/licenses/${pkgname}/COPYING"
    # Install launch script
    install -Dm 755 "${srcdir}/rstudio.sh" "${pkgdir}/usr/bin/rstudio"
    # Fix LD_LIBRARY_PATH in .desktop file
    sed -i 's|/usr/lib/rstudio/bin/rstudio|/usr/bin/rstudio|g' "${pkgdir}/usr/share/applications/rstudio.desktop"
}
