# Maintainer: Nocifer <apmichalopoulos at gmail dot com>
# Contributor: UTUMI Hirosi <utuhiro78 at yahoo dot co dot jp>
# Contributor: Felix Yan <felixonmars@gmail.com>
# Contributor: ponsfoot <cabezon dot hashimoto at gmail dot com>


## The UT dictionary's project page: http://linuxplayers.g1.xrea.com/mozc-ut.html


pkgname='mozc-ut-common'
pkgver=2.26.4632.102.20220112
pkgrel=1
pkgdesc='The Open Source edition of Google Japanese Input bundled with the UT dictionary'
arch=('x86_64')
url='https://github.com/google/mozc'
license=('Apache' 'BSD' 'LGPL' 'custom')
depends=('qt5-base')
makedepends=('bazel' 'git' 'pkgconf' 'python-six')
conflicts=('mozc' 'mozc-ut' 'mozc-ut2' 'mozc-ut-united' 'mozc-neologd-ut+ut2')
provides=('mozc=2.26.4632.102')
source=("${pkgname}-git::git+https://github.com/google/mozc.git#commit=7329757e1ad30e327c1ae823a8302c79482d6b9c"
        "https://osdn.net/downloads/users/37/37590/mozcdic-ut-20220112.tar.bz2")
sha256sums=('SKIP'
            '0d22419db25dcbf1bccb4595414fdc78bc3ebf7088e0f076de4a91553f3db94b')

prepare() {
    cd ${pkgname}-git

    git submodule update --init --recursive

    cd src

    # Fix the Qt5 include path
    sed -i -e 's/x86_64-linux-gnu\/qt5/qt/' config.bzl

    # Temp fix for the Android NDK error
    sed -i -e 's/android_ndk_repository(name = "androidndk")/#android_ndk_repository(name = "androidndk")/' WORKSPACE.bazel

    # Add the UT dictionary
    cat ${srcdir}/mozcdic-ut-20220112/mozcdic-ut-20220112.txt >> data/dictionary_oss/dictionary00.txt
}

build() {
    cd ${pkgname}-git/src

    env PATH="/usr/lib/jvm/java-11-openjdk/bin/:$PATH" bazel build server:mozc_server gui/tool:mozc_tool --config oss_linux --compilation_mode opt
}

package() {
    install -Dm644 mozcdic-ut-20220112/LICENSE                  ${pkgdir}/usr/share/licenses/mozc/LICENSE_UT_DICTIONARY

    cd ${pkgname}-git/src

    install -Dm644 ../LICENSE                                   ${pkgdir}/usr/share/licenses/mozc/LICENSE
    install -Dm644 data/installer/credits_en.html               ${pkgdir}/usr/share/licenses/mozc/credits_en.html

    install -Dm755 bazel-bin/server/mozc_server                 ${pkgdir}/usr/lib/mozc/mozc_server
    install -Dm755 bazel-bin/gui/tool/mozc_tool                 ${pkgdir}/usr/lib/mozc/mozc_tool
}
