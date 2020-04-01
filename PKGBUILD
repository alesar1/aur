# Maintainer: Artem Klevtsov <a.a.klevtso@gmail.com>
# Contributor: Conor Anderson <conor@conr.ca>

pkgname=rstudio-desktop-git
_gitname=rstudio
pkgver=1.2.5033.r3966
_gwtver=2.8.2
_ginver=2.1.2
_nodever=10.19.0
pkgrel=1
pkgdesc="A powerful and productive integrated development environment (IDE) for R programming language"
arch=('i686' 'x86_64')
url="https://www.rstudio.com/products/rstudio/"
license=('AGPL3')
depends=('boost-libs' 'r>=3.0.1' hunspell-en_US mathjax2 pandoc clang qt5-sensors qt5-svg qt5-webengine qt5-xmlpatterns)
makedepends=(git 'cmake>=3.1.0' 'boost' desktop-file-utils jdk8-openjdk apache-ant unzip openssl libcups pam patchelf wget yarn)
optdepends=('git: for git support'
            'subversion: for subversion support'
            'openssh-askpass: for a git ssh access')
provides=('rstudio-desktop' 'rstudio-desktop-bin' 'rstudio-desktop-preview')
conflicts=('rstudio-desktop' 'rstudio-desktop-bin' 'rstudio-desktop-preview')
source=("git+https://github.com/rstudio/rstudio.git"
        "https://s3.amazonaws.com/rstudio-buildtools/gin-${_ginver}.zip"
        "https://s3.amazonaws.com/rstudio-buildtools/gwt-${_gwtver}.zip"
	"https://nodejs.org/dist/v${_nodever}/node-v${_nodever}-linux-x64.tar.gz"
	"soci.patch"
	"rstudio_boost.patch"
	"qt.conf"
       )
sha256sums=('SKIP'
            'b98e704164f54be596779696a3fcd11be5785c9907a99ec535ff6e9525ad5f9a'
            '970701dacc55170088f5eb327137cb4a7581ebb4734188dfcc2fad9941745d1b'
            '36d90bc58f0418f31dceda5b18eb260019fcc91e59b0820ffa66700772a8804b'
            'b12cb64ec72b0e2c45f832908b9e1fb3550c70edc7da7733f8d5e07d4ab6bf77'
            'e0500613ca427af1dae9418559589cf4fdd646aa30cb02563476184cb32b58cb'
            '723626bfe05dafa545e135e8e61a482df111f488583fef155301acc5ecbbf921')
noextract=("gin-${_ginver}.zip")

pkgver() {
    cd "${srcdir}/${_gitname}"
    git describe --long --tags | sed 's/^v//;s/\([^-]*\)-g.*/r\1/;s/-/./g'
}

prepare() {
    cd ${srcdir}/${_gitname}
    # Patching SOCI
    patch -p1 < ${srcdir}/soci.patch
    patch -p1 < ${srcdir}/rstudio_boost.patch

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
    ln -sfT /usr/share/mathjax2 mathjax-27
    ln -sfT /usr/bin/pandoc pandoc/pandoc
    ln -sfT /usr/bin/pandoc-citeproc pandoc/pandoc-citeproc

    # Nodejs
    install -d node/${_nodever}
    cp -r ${srcdir}/node-v${_nodever}-linux-x64/* node/${_nodever}
    cd ${srcdir}/${_gitname}/src/gwt/panmirror/src/editor
    yarn config set ignore-engines true
    yarn install
 
    cd ${srcdir}/${_gitname}/dependencies/common
    msg "Downloading and installing R packages..."
    bash install-packages
}

build() {
    rm -rf "${srcdir}/${_gitname}/build"
    mkdir "${srcdir}/${_gitname}/build"
    cd "${srcdir}/${_gitname}/build"
    export PATH=/usr/lib/jvm/java-8-openjdk/jre/bin/:${PATH}
    cmake -DRSTUDIO_TARGET=Desktop \
          -DCMAKE_BUILD_TYPE=Release \
          -DCMAKE_INSTALL_PREFIX=/usr/lib/rstudio \
          -DRSTUDIO_USE_SYSTEM_BOOST=yes \
          -DQT_QMAKE_EXECUTABLE=/usr/bin/qmake \
          -DBoost_NO_BOOST_CMAKE=ON \
	  -DRSTUDIO_USE_SYSTEM_SOCI=yes \
          -DRSTUDIO_BUNDLE_QT=FALSE ..
}

package() {
    cd "${srcdir}/${_gitname}/build"
    # Install the program
    make DESTDIR="${pkgdir}" install
    # Install the license
    install -Dm 644 ../COPYING "${pkgdir}/usr/share/licenses/${pkgname}/COPYING"
    # Symlink main binary
    install -d "${pkgdir}/usr/bin"
    ln -s "/usr/lib/${_gitname}/bin/${_gitname}" "${pkgdir}/usr/bin/${_gitname}"

    # BUGFIX: qt5-webengine isn't init'ing properly. Likely an Rstudio bug.
    install -D "${srcdir}/qt.conf" "${pkgdir}/usr/lib/qt/libexec/qt.conf"
}
