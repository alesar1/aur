# Maintainer: Yurii Kolesnykov <root@yurikoles.com>
# Contributor: Luchesar V. ILIEV <luchesar%2eiliev%40gmail%2ecom>
# Contributor: Anders Bergh <anders@archlinuxppc.org>
# Contributor: Armin K. <krejzi at email dot com>
# Contributor: Christian Babeux <christian.babeux@0x80.ca>
# Contributor: Evangelos Foutras <evangelos@foutrelis.com>
# Contributor: Roberto Alsina <ralsina@kde.org>
# Contributor: Thomas Dziedzic < gostrc at gmail >
# Contributor: Tomas Lindquist Olsen <tomas@famolsen.dk>
# Contributor: Tomas Wilhelmsson <tomas.wilhelmsson@gmail.com>

pkgbase=lib32-llvm-git
pkgname=(lib32-llvm-git lib32-llvm-libs-git)
pkgdesc="Collection of modular and reusable compiler and toolchain technologies (32-bit, git)"
pkgver=9.0.0_r316806.f40c18b628f
pkgrel=2
arch=('x86_64')
url='https://llvm.org/'
license=('custom:University of Illinois/NCSA Open Source License')
makedepends=('cmake' 'lib32-gcc-libs' 'git' 'lib32-libffi' 'lib32-libxml2' 'lib32-zlib' 'ninja' 'python')
source=("llvm-project::git+https://github.com/llvm/llvm-project.git")
sha512sums=('SKIP')

pkgver() {
    cd llvm-project/llvm

    # This will almost match the output of `llvm-config --version` when the
    # LLVM_APPEND_VC_REV cmake flag is turned on. The only difference is
    # dash being replaced with underscore because of Pacman requirements.
    local _pkgver=$(awk -F 'MAJOR |MINOR |PATCH |SUFFIX |)' \
            'BEGIN { ORS="." ; i=0 } \
             /set\(LLVM_VERSION_/ { print $2 ; i++ ; if (i==2) ORS="" } \
             END { print "\n" }' \
             CMakeLists.txt)_r$(git rev-list --count HEAD).$(git rev-parse --short HEAD)
    echo "${_pkgver//svn}"
}

prepare() {
    # Somehow CMake finds the 64-bit library in /lib first,
    # so let's preseed CMAKE_LIBRARY_PATH with /lib32.
    sed -i \
        '/^[[:blank:]]*find_library(FFI_LIBRARY_PATH/i\
    list(INSERT CMAKE_LIBRARY_PATH 0 /usr/lib32)' \
        "$srcdir"/llvm-project/llvm/cmake/config-ix.cmake
}

build() {
    if [  -d _build ]; then
        rm -rf _build
    fi
    mkdir _build
    cd _build
    export PKG_CONFIG_PATH="/usr/lib32/pkgconfig"

    cmake "$srcdir"/llvm-project/llvm  -G Ninja \
        -DLLVM_ENABLE_PROJECTS="clang;clang-tools-extra;compiler-rt" \
        -DCMAKE_BUILD_TYPE=Release \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DLLVM_LIBDIR_SUFFIX=32 \
        -DCMAKE_C_FLAGS:STRING=-m32 \
        -DCMAKE_CXX_FLAGS:STRING=-m32 \
        -DLLVM_TARGET_ARCH:STRING=i686 \
        -DLLVM_HOST_TRIPLE=$CHOST \
        -DLLVM_DEFAULT_TARGET_TRIPLE="i686-pc-linux-gnu" \
        -DLLVM_BUILD_LLVM_DYLIB=ON \
        -DLLVM_LINK_LLVM_DYLIB=ON \
        -DLLVM_ENABLE_BINDINGS=OFF \
        -DLLVM_ENABLE_RTTI=ON \
        -DLLVM_ENABLE_FFI=ON \
        -DLLVM_BUILD_TESTS=ON \
        -DLLVM_BUILD_DOCS=OFF \
        -DLLVM_ENABLE_SPHINX=OFF \
        -DLLVM_ENABLE_DOXYGEN=OFF \
        -DFFI_INCLUDE_DIR=$(pkg-config --variable=includedir libffi) \
        -DLLVM_BINUTILS_INCDIR=/usr/include \
        -DCOMPILER_RT_BUILD_LIBFUZZER=OFF \
        -DLLVM_APPEND_VC_REV=ON

    if [[ ! $NINJAFLAGS ]]; then
        ninja all
    else
        ninja "$NINJAFLAGS" all
    fi
}

check() {
    cd _build
    ninja check-llvm
    ninja check-clang
}

package_lib32-llvm-git() {
depends=('lib32-llvm-libs-git' 'llvm-git')
provides=(lib32-llvm=$pkgver-$pkgrel lib32-clang=$pkgver-$pkgrel 'lib32-clang-git'
                'lib32-clang-svn'  'lib32-llvm-svn')
conflicts=('lib32-llvm' 'lib32-clang' 
                    'lib32-llvm-svn' 'lib32-clang-svn')

    cd _build

    DESTDIR="$pkgdir" ninja install

    # The runtime library goes into lib32-llvm-libs
    mv "$pkgdir"/usr/lib32/lib{LLVM,LTO}*.so* "$srcdir"
    mv -f "$pkgdir"/usr/lib32/LLVMgold.so "$srcdir"

    
    mv "$pkgdir"/usr/bin/llvm-config "$pkgdir"/usr/lib32/llvm-config
    mv "$pkgdir"/usr/include/llvm/Config/llvm-config.h \
    "$pkgdir"/usr/lib32/llvm-config-32.h

    rm -rf "$pkgdir"/usr/{bin,include,libexec,share/{doc,man,llvm,opt-viewer,scan-build,scan-view,clang}}
      
    # Needed for multilib (https://bugs.archlinux.org/task/29951)
    # Header stub is taken from Fedora
    install -d "$pkgdir"/usr/include/llvm/Config
    mv "$pkgdir"/usr/lib32/llvm-config-32.h "$pkgdir"/usr/include/llvm/Config/

    install -d "$pkgdir"/usr/bin
    mv "$pkgdir"/usr/lib32/llvm-config "$pkgdir"/usr/bin/llvm-config32

    cd "$srcdir"/llvm-project/
    install -D -m 0644 llvm/LICENSE.TXT "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
    install -Dm644 clang/LICENSE.TXT "$pkgdir"/usr/share/licenses/$pkgname/clang-LICENSE
    install -Dm644 clang-tools-extra/LICENSE.TXT "$pkgdir"/usr/share/licenses/$pkgname/clang-tools-extra-LICENSE
    install -Dm644 compiler-rt/LICENSE.TXT "$pkgdir"/usr/share/licenses/$pkgname/compiler-rt-LICENSE
}

package_lib32-llvm-libs-git() {
    depends=('lib32-gcc-libs' 'lib32-libffi' 'lib32-libxml2' 'lib32-ncurses' 'lib32-zlib')
provides=(lib32-llvm-libs=$pkgver-$pkgrel 'lib32-llvm-libs-svn')
conflicts=('lib32-llvm-libs')
    
    install -d "$pkgdir/usr/lib32"

    cp -P \
        "$srcdir"/lib{LLVM,LTO}*.so* \
        "$srcdir"/LLVMgold.so \
        "$pkgdir/usr/lib32/"

    # Symlink LLVMgold.so from /usr/lib/bfd-plugins
    # https://bugs.archlinux.org/task/28479
    install -d "$pkgdir/usr/lib32/bfd-plugins"
    ln -s ../LLVMgold.so "$pkgdir/usr/lib32/bfd-plugins/LLVMgold.so"

    cd "$srcdir"/llvm-project/
    install -D -m 0644 llvm/LICENSE.TXT "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
    install -Dm644 clang/LICENSE.TXT "$pkgdir"/usr/share/licenses/$pkgname/clang-LICENSE
    install -Dm644 clang-tools-extra/LICENSE.TXT "$pkgdir"/usr/share/licenses/$pkgname/clang-tools-extra-LICENSE
    install -Dm644 compiler-rt/LICENSE.TXT "$pkgdir"/usr/share/licenses/$pkgname/compiler-rt-LICENSE
    }
