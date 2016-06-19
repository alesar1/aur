#PKGCONFIG for android-qt5
# Maintainer: Gonzalo Exequiel Pedone <hipersayan DOT x AT gmail DOT com>
# Contributor: Jiaxi Hu <sftrytry _AT_ gmail _DOT_ com>
# Contributor: jimmy00784 <jimmy00784@gmail.com>
# Contributor: Ricardo (XenGi) Band <email@ricardo.band>

android_arch=arm64-v8a
_pkgname=android-qt5
pkgname=${_pkgname}-${android_arch}
_pkgver=5.6
pkgver=${_pkgver}.1
pkgrel=2
pkgdesc="Qt 5 for Android"
arch=('i686' 'x86_64')
url='https://www.qt.io'
license=('GPL3' 'LGPL')
makedepends=('libgl'
             'sqlite'
             'zlib'
             'python2'
             'ruby'
             'gperf'
             'libxslt'
             'fontconfig')
depends=('java-runtime-headless>=7'
         'apache-ant'
         'android-ndk'
         'android-platform'
         'android-sdk'
         'android-sdk-build-tools'
         'android-sdk-platform-tools')
groups=('android-qt5')

case "$android_arch" in
    arm*)
        optdepends=('android-google-apis-armv7a-eabi: AVD support'
                    'android-armv7a-eabi-system-image: AVD support')
        ;;
    x86)
        optdepends=('android-google-apis-x86: AVD support'
                    'android-x86-system-image: AVD support')
        ;;
    x86_64)
        optdepends=('android-google-apis-x86-64: AVD support'
                    'android-x86-64-system-image: AVD support')
        ;;
    *)
        ;;
esac

_pkgfqn="qt-everywhere-opensource-src-${pkgver}"
source=("http://download.qt-project.org/official_releases/qt/${_pkgver}/${pkgver}/single/${_pkgfqn}.tar.xz"
        "Misc.cpp.patch"
        "JavaScriptCore.pri.patch"
        "imageformats.pro.patch"
        "src.pro.patch")
sha256sums=('0d3cc75d2368ad988c9ec6bcbed6362dbaa8e03fdfd04e679284f4b9af91e565'
            '096eef8234f0ea964ac20ca887c8da2e7b5b836de417515acde103c2a27a04de'
            '133dad6c8d0bedaa5d561be26b2f7185e671900c50d11476ecb2e2ef6792d455'
            '943e8c03dc2218250f75cec3b663d90e6bb98d9b64b9f12b01713c284e5e4673'
            '1e0bda5274a17a0aea431e53adf737beab8552b7a0ff70d478ba07004ffbdcf8')

prepare() {
    cd ${_pkgfqn}

    # Disable qtplugininfo build.
    patch -Np1 -i "../src.pro.patch"

    # Fix problem with time.h.
    patch -Np1 -i "../Misc.cpp.patch"

    # Platform specific patches.
    case "$android_arch" in
        arm64-v8a)
            # Disable WebP image format.
            patch -Np1 -i "../imageformats.pro.patch"
            ;;
        armeabi)
            # Disable JIT.
            patch -Np1 -i "../JavaScriptCore.pri.patch"
            ;;
        *)
            ;;
    esac
}

get_last() {
    ls $1 | sort -V | tail -n 1
}

build() {
    cd ${_pkgfqn}

    unset CC
    unset CXX
    unset CFLAGS
    unset CXXFLAGS
    unset LDFLAGS
    unset CHOST
    unset QMAKESPEC
    unset QTDIR

    if [ "${CARCH}" == 'i686' ]; then
        ndkhost='linux-x86'
    elif [ "${CARCH}" == 'x86_64' ]; then
        ndkhost='linux-x86_64'
    fi

    unset CARCH

    export ANDROID_NDK_ROOT=/opt/android-ndk
    export ANDROID_SDK_ROOT=/opt/android-sdk
    export ANDROID_BUILD_TOOLS_REVISION=$(get_last ${ANDROID_SDK_ROOT}/build-tools)
    export ANDROID_API_VERSION=$(get_last ${ANDROID_SDK_ROOT}/platforms)
    export PYTHON=/usr/bin/python2

    ndkPlatform=$(get_last ${ANDROID_NDK_ROOT}/platforms)
    _pref=/opt/${_pkgname}/${pkgver}/${android_arch}

    configue_opts="
        -confirm-license
        -opensource
        -prefix ${_pref}
        -docdir ${_pref}/doc
        -xplatform android-g++
        -nomake tests
        -nomake examples
        -android-ndk ${ANDROID_NDK_ROOT}
        -android-sdk ${ANDROID_SDK_ROOT}
        -android-ndk-host ${ndkhost}
        -android-toolchain-version 4.9
        -skip qttranslations
        -skip qtserialport
        -no-warnings-are-errors
        -no-pkg-config
        -qt-zlib
        -qt-freetype
        -android-arch ${android_arch}
        -android-ndk-platform ${ndkPlatform}"

    # Platform specific patches
    case "$android_arch" in
        mips)
             configue_opts+="
                 -skip qt3d"
            ;;
        *)
            ;;
    esac

    ./configure ${configue_opts}

    make || return 1
}

package() {
    cd ${_pkgfqn}
    make INSTALL_ROOT=${pkgdir} install
}
