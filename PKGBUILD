# Maintainer: Artem Klevtsov <a.a.klevtso@gmail.com>

pkgname=rstudio-desktop-git
_gitname=rstudio
pkgver=v1.1.371.r729.g401e38621d
_gwtver=2.8.1
_ginver=2.1.2
_clangver=5.0.0
pkgrel=1
pkgdesc="A powerful and productive integrated development environment (IDE) for R programming language"
arch=('i686' 'x86_64')
url="https://www.rstudio.com/products/rstudio/"
license=('AGPL3')
depends=('boost-libs>=1.63' 'r>=2.11.1' hicolor-icon-theme shared-mime-info pango hunspell-en mathjax pandoc clang qt5-base qt5-declarative qt5-location qt5-sensors qt5-svg qt5-webengine qt5-xmlpatterns)
makedepends=(git 'cmake>=2.8' 'boost>=1.63' java-environment apache-ant unzip openssl libcups pam wget)
optdepends=('git: for git support'
            'subversion: for subversion suuport'
            'openssh-askpass: for a git ssh access')
provides=('rstudio-desktop' 'rstudio-desktop-bin' 'rstudio-desktop-preview')
conflicts=('rstudio-desktop' 'rstudio-desktop-bin' 'rstudio-desktop-preview')
install="${pkgname}.install"

source=("git+https://github.com/rstudio/rstudio.git"
        "https://s3.amazonaws.com/rstudio-buildtools/gin-${_ginver}.zip"
        "https://s3.amazonaws.com/rstudio-buildtools/gwt-${_gwtver}.zip"
        "https://s3.amazonaws.com/rstudio-dictionaries/core-dictionaries.zip")
md5sums=('SKIP'
         'e2617189fe5c138945b8cc95f26bd476'
         'ddd572887957fd5cdfde3469bd8c1102'
         '0e03798b8e53096c4a906bde05e32378')

pkgver() {
    cd "${srcdir}/${_gitname}"
    git describe --long --tags | sed -r 's/([^-]*-g)/r\1/;s/-/./g'
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
    cmake -DRSTUDIO_TARGET=Desktop \
          -DCMAKE_BUILD_TYPE=Release \
          -DCMAKE_INSTALL_PREFIX=/usr/lib/rstudio \
          -DQT_QMAKE_EXECUTABLE=/usr/bin/qmake-qt5 ..
}

package() {
    cd "${srcdir}/${_gitname}/build"
    # Install the program
    make DESTDIR="${pkgdir}" install
    # Install the license
    install -Dm 644 ../COPYING "${pkgdir}/usr/share/licenses/${pkgname}/COPYING"
    # Creaate symlinks
    install -d "${pkgdir}/usr/bin"
    ln -sf /usr/lib/rstudio/bin/rstudio "${pkgdir}/usr/bin/rstudio"
}
