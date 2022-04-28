# Maintainer: Artem Klevtsov <a.a.klevtso@gmail.com>
# Maintainer: Stephen Martin <hwkiller@gmail.com>
# Contributor: Conor Anderson <conor@conr.ca>

pkgname=rstudio-desktop
_vermajor="2022"
_verminor="02"
_verpatch="1"
_versuffix="+461"
_gitcommit=fc9e217
_gitname=rstudio-rstudio-${_gitcommit}
pkgver=${_vermajor}.${_verminor}.${_verpatch}${_versuffix}
_srcname=rstudio-${_vermajor}.${_verminor}.${_verpatch}${_versuffix//+/-}
_gwtver=2.8.2
_ginver=2.1.2
_nodever=14.17.5
_pandocver="current"
_quarto="FALSE"

pkgrel=3
pkgdesc="A powerful and productive integrated development environment (IDE) for R programming language"
arch=('x86_64')
url="https://www.rstudio.com/products/rstudio/"
license=('AGPL3')
depends=('r>=3.0.1' boost-libs qt5-sensors qt5-svg qt5-webengine qt5-xmlpatterns postgresql-libs sqlite3 soci clang hunspell-en_US mathjax2 pandoc yaml-cpp)
makedepends=(git 'cmake>=3.1.0' boost desktop-file-utils jdk8-openjdk apache-ant unzip openssl libcups pam patchelf wget yarn)
optdepends=('git: for git support'
            'subversion: for subversion support'
            'openssh-askpass: for a git ssh access'
            'quarto: for Quarto projects support')

provides=('rstudio-desktop')
conflicts=('rstudio-desktop' 'rstudio-desktop-bin' 'rstudio-desktop-preview' 'rstudio-desktop-git')
source=("rstudio-$pkgver.tar.gz::https://github.com/rstudio/rstudio/archive/refs/tags/v${_vermajor}.${_verminor}.${_verpatch}${_versuffix}.tar.gz"
        "https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/google-gin/gin-${_ginver}.zip"
        "https://storage.googleapis.com/gwt-releases/gwt-${_gwtver}.zip"
        "https://nodejs.org/dist/v${_nodever}/node-v${_nodever}-linux-x64.tar.gz"
        "qt.conf"
        "cran_multithread.patch"
        "sigstksz_gcc11.patch"
        "10952.patch"
        "quarto_pandoc_location.patch"
        "pandoc_version.patch")

sha256sums=('41e48e21ddc0a9c1ebf06ff16d846b0389720f2ee66d3fcfd5ff0707578b597d'
            'b98e704164f54be596779696a3fcd11be5785c9907a99ec535ff6e9525ad5f9a'
            '970701dacc55170088f5eb327137cb4a7581ebb4734188dfcc2fad9941745d1b'
            'dc04c7e60235ff73536ba0d9e50638090f60cacabfd83184082dce3b330afc6e'
            '723626bfe05dafa545e135e8e61a482df111f488583fef155301acc5ecbbf921'
            'c907e6eec5ef324ad498b44fb9926bb5baafc4e0778ca01f6ba9b49dd3a2a980'
            '7b8420db08f848f7baac0f3104c879ac7ce6e27e463f96a6b1c6589cd4b8df82'
            '71c41818d099c07d928aa9689a5fd57bb3dc187b9788a8d5cc528ef6208b7726'
            'f496c8d012ec7211b7d76240932c1b33fc76c5bb756b354eb00dd5c4344baeab'
            '71cc9986a02c209960309f0e1dd50f08a8f7e59c1bc09ec45d10058a89299939')

noextract=("gin-${_ginver}.zip")

prepare() {
    cd ${srcdir}/${_srcname}
    local JOBS; JOBS="$(grep -oP -- "-j\s*\K[0-9]+" <<< "${MAKEFLAGS}")" || JOBS="1"
    sed "s/@@proc_num@@/${JOBS}/" -i ${srcdir}/cran_multithread.patch
    patch -p1 < ${srcdir}/cran_multithread.patch
    patch -p1 < ${srcdir}/sigstksz_gcc11.patch
    # Fix for quarto/pandoc location
    # https://github.com/rstudio/rstudio/pull/10952
    patch -p1 < ${srcdir}/10952.patch
    patch -p1 < ${srcdir}/quarto_pandoc_location.patch
    # Do not use outdated version name of pandoc
    patch -p1 < ${srcdir}/pandoc_version.patch

    msg "Extracting dependencies..."
    cd "${srcdir}/${_srcname}/src/gwt"
    install -d lib/gin/${_ginver} lib/gwt/${_gwtver}
    unzip -qo "${srcdir}/gin-${_ginver}.zip" -d lib/gin/${_ginver}
    cp -r "${srcdir}/gwt-${_gwtver}/"* lib/gwt/${_gwtver}

    cd "${srcdir}/${_srcname}/dependencies/common"
    #_pandocver=$(grep -oP "(?<=PANDOC_VERSION=\").*(?=\"$)" install-pandoc)
    install -d pandoc/${_pandocver}
 
    ln -sfT /usr/share/myspell/dicts dictionaries
    ln -sfT /usr/share/mathjax2 mathjax-27
    ln -sfT /usr/bin/pandoc pandoc/${_pandocver}/pandoc


    # Nodejs
    install -d node/${_nodever}
    cp -r "${srcdir}/node-v${_nodever}-linux-x64/"* node/${_nodever}
    cd "${srcdir}/${_srcname}/src/gwt/panmirror/src/editor"
    yarn config set ignore-engines true
    yarn install

    # Fix links for src/cpp/session/CMakeLists.txt
    cd "${srcdir}/${_srcname}/dependencies"
    ln -sfT /usr/share/myspell/dicts dictionaries
    ln -sfT /usr/share/mathjax2 mathjax-27
    #ln -sfT /usr/bin/pandoc pandoc
}

build() {

    # Quarto
    msg "Checking if Quarto is installed..."

    if (pacman -Q quarto >/dev/null) ; then
        msg "Enabling Quarto support..."
        _quarto="TRUE"
        cd "${srcdir}/${_srcname}/dependencies"
        install -d quarto/bin/tools
        ln -sfT /usr/bin/quarto quarto/bin/quarto
        ln -sfT /usr/bin/pandoc quarto/bin/tools/pandoc
    else
        msg "Use pandoc, because Quarto is not used..."
        cd "${srcdir}/${_srcname}/dependencies"
        install -d pandoc/${_pandocver}/bin/tools
        ln -sfT /usr/bin/pandoc pandoc/${_pandocver}/bin/tools/pandoc
    fi

    cd ${srcdir}

    msg "Downloading and installing R packages..."
    bash "${srcdir}/${_srcname}"/dependencies/common/install-packages

    export PATH=/usr/lib/jvm/java-8-openjdk/jre/bin/:${PATH}
    export RSTUDIO_VERSION_MAJOR=${_vermajor}
    export RSTUDIO_VERSION_MINOR=${_verminor}
    export RSTUDIO_VERSION_PATCH=${_verpatch}
    export RSTUDIO_VERSION_SUFFIX=${_versuffix}
    export GIT_COMMIT=${_gitcommit}
    export PACKAGE_OS=$(uname -om)
    
    cmake -S "${srcdir}/${_srcname}" -B build \
          -DRSTUDIO_TARGET=Desktop \
          -DCMAKE_BUILD_TYPE=Release \
          -DCMAKE_INSTALL_PREFIX=/usr/lib/rstudio \
          -DRSTUDIO_USE_SYSTEM_BOOST=yes \
          -DRSTUDIO_USE_SYSTEM_YAML_CPP=yes \
          -DQT_QMAKE_EXECUTABLE=/usr/bin/qmake \
          -DBoost_NO_BOOST_CMAKE=ON \
          -DQUARTO_ENABLED=${_quarto} \
          -DRSTUDIO_USE_SYSTEM_SOCI=yes \
          -DRSTUDIO_BUNDLE_QT=FALSE
#   make -C build
}

package() {
    # Install the program
    make -C build DESTDIR="${pkgdir}" install

    # Install the license
    install -Dm 644 "${srcdir}/${_srcname}/COPYING" "${pkgdir}/usr/share/licenses/${pkgname}/COPYING"

    # Symlink main binary
    install -d "${pkgdir}/usr/bin"
    ln -s "/usr/lib/rstudio/bin/rstudio" "${pkgdir}/usr/bin/rstudio"

    # BUGFIX: qt5-webengine isn't init'ing properly. Likely an Rstudio bug.
    install -Dm 644 "${srcdir}/qt.conf" "${pkgdir}/usr/lib/qt/libexec/qt.conf"
}
