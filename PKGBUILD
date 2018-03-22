# Maintainer: Artem Klevtsov <a.a.klevtso@gmail.com>
# Contributor: Conor Anderson <conor@conr.ca>

pkgname=rstudio-desktop-git
_gitname=rstudio
pkgver=v1.1.371.r1395
_gwtver=2.8.1
_ginver=2.1.2
_clangver=5.0.1
_qtver=5.10.1
pkgrel=1
pkgdesc="A powerful and productive integrated development environment (IDE) for R programming language"
arch=('i686' 'x86_64')
url="https://www.rstudio.com/products/rstudio/"
license=('AGPL3')
depends=('boost-libs>=1.63' 'r>=2.11.1' hicolor-icon-theme shared-mime-info pango hunspell-en mathjax pandoc clang qt5-base qt5-declarative qt5-location qt5-sensors qt5-svg qt5-webengine qt5-xmlpatterns)
makedepends=(git 'cmake>=2.8' 'boost>=1.63' java-environment apache-ant unzip openssl libcups pam patchelf wget)
optdepends=('git: for git support'
            'subversion: for subversion support'
            'openssh-askpass: for a git ssh access')
provides=('rstudio-desktop' 'rstudio-desktop-bin' 'rstudio-desktop-preview')
conflicts=('rstudio-desktop' 'rstudio-desktop-bin' 'rstudio-desktop-preview')
install="${pkgname}.install"

source=("git+https://github.com/rstudio/rstudio.git"
        "https://s3.amazonaws.com/rstudio-buildtools/gin-${_ginver}.zip"
        "https://s3.amazonaws.com/rstudio-buildtools/gwt-${_gwtver}.zip"
        "https://s3.amazonaws.com/rstudio-buildtools/QtSDK-${_qtver}-x86_64.tar.gz"
        "https://s3.amazonaws.com/rstudio-dictionaries/core-dictionaries.zip"
        "rstudio.sh")
md5sums=('SKIP'
         'e2617189fe5c138945b8cc95f26bd476'
         'ddd572887957fd5cdfde3469bd8c1102'
         'a07084d60807d4643738d8bdee87117b'
         '0e03798b8e53096c4a906bde05e32378'
         'a095c1c62270a1997a5d158144394dbb')

pkgver() {
    cd "${srcdir}/${_gitname}"
    git describe --long --tags | sed -r 's/([^-]*)-g.*/r\1/;s/-/./g'
}

prepare() {
    msg "Extracting dependencies..."
    cd "${srcdir}/${_gitname}/src/gwt"
    install -d dictionaries
    install -d lib/{gin,gwt}
    install -d lib/gin/${_ginver}
    install -d lib/gwt/${_gwtver}
    unzip -qo "${srcdir}/core-dictionaries.zip" -d dictionaries
    unzip -qo "${srcdir}/gin-${_ginver}.zip" -d lib/gin/${_ginver}
    cp -r "${srcdir}/gwt-${_gwtver}/"* lib/gwt/${_gwtver}

    cd "${srcdir}/${_gitname}/dependencies/common"
    install -d pandoc libclang/{3.5,builtin-headers}
 
    ln -sfT /usr/share/myspell/dicts dictionaries
    ln -sfT /usr/share/mathjax mathjax-26
    ln -sfT /usr/bin/pandoc pandoc/pandoc
    ln -sfT /usr/bin/pandoc-citeproc pandoc/pandoc-citeproc
    ln -sfT /usr/lib/libclang.so libclang/3.5/libclang.so
    ln -sfT /usr/lib/clang/$_clangver/include libclang/builtin-headers/3.5
 
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
