pkgbase=swift-development
pkgname=(swift-development swift-lldb-development)
_swiftver=DEVELOPMENT-SNAPSHOT-2016-03-01-a
pkgver=${_swiftver//-/.}
pkgrel=1
pkgdesc="The Swift programming language and debugger - latest development snapshot"
arch=('i686' 'x86_64')
url="http://swift.org/"
license=('apache')
depends=('python2' 'libutil-linux' 'icu' 'libbsd' 'libedit' 'libxml2'
         'sqlite' 'ncurses')
makedepends=('git' 'cmake' 'ninja' 'swig' 'clang>=3.6' 'python2-six' 'perl'
             # See https://llvm.org/bugs/show_bug.cgi?id=26580 and
             # https://sourceware.org/bugzilla/show_bug.cgi?id=19612
             # NOTE: Using gold doesn't completely work either, since gold
             # isn't used to link the swift std libraries by default
             'binutils<2.26')
source=(
    "swift-${_swiftver}.tar.gz::https://github.com/apple/swift/archive/swift-${_swiftver}.tar.gz"
    "swift-llvm-${_swiftver}.tar.gz::https://github.com/apple/swift-llvm/archive/swift-${_swiftver}.tar.gz"
    "swift-clang-${_swiftver}.tar.gz::https://github.com/apple/swift-clang/archive/swift-${_swiftver}.tar.gz"
    "swift-lldb-${_swiftver}.tar.gz::https://github.com/apple/swift-lldb/archive/swift-${_swiftver}.tar.gz"
    "swift-cmark-${_swiftver}.tar.gz::https://github.com/apple/swift-cmark/archive/swift-${_swiftver}.tar.gz"
    "swift-llbuild-${_swiftver}.tar.gz::https://github.com/apple/swift-llbuild/archive/swift-${_swiftver}.tar.gz"
    "swift-package-manager-${_swiftver}.tar.gz::https://github.com/apple/swift-package-manager/archive/swift-${_swiftver}.tar.gz"
    "swift-corelibs-xctest-${_swiftver}.tar.gz::https://github.com/apple/swift-corelibs-xctest/archive/swift-${_swiftver}.tar.gz"
    "swift-corelibs-foundation-${_swiftver}.tar.gz::https://github.com/apple/swift-corelibs-foundation/archive/swift-${_swiftver}.tar.gz"
    "swift-integration-tests-${_swiftver}.tar.gz::https://github.com/apple/swift-integration-tests/archive/swift-${_swiftver}.tar.gz"
    "swift-no-docs.patch"
)
sha256sums=('8af4d4a1eed2084520a5b320668e0ba328068f12b3751f880869442b2cbdb313'
            '8640340e20a1367a28b8457b38cbd3d036d6f714f7ceaf872b073078eb984280'
            '10242a391a0aad00982310cceb17b523e631e1e4c6ddd415839d4dde0f6dcd39'
            'dc12005b49b9702d994c5bcc3ce8dbd08762857d86ded7c3780ae391507261ea'
            'a9c787264b58c00c335b242deb6ef9939510282295cf805315ac11c8b43cb6ef'
            'b7379613e079679e5ee1fc023badf659041ec9630fed4827fdec80316584c9a3'
            '26e9ad151bcf8d73c52f16b64e11e20ce18e6a6f410590915393c84c97aaabd1'
            'cd42bc7c9d72a2f6212d265066a890135ff7225322fc078f8ed0eba4214a0fee'
            'fc269fd6b47067af45809a5c7a116f334bf04f2ef2849dff3ae1ab7ea8dd197e'
            '7fe7045f04e8fd442b9536fa3dff7dad36a7d1e08a5ad36abbf97015ba1fdf1b'
            '1a8663c48a1a203d1825ae62a7e4191e4980a2dad461d4d88152221ad9e2171d')

prepare() {
    # Use python2 where appropriate
    find "$srcdir" -type f -print0 | \
         xargs -0 sed -i 's|/usr/bin/env python$|&2|'
    find "$srcdir/swift-lldb-swift-${_swiftver}" -name Makefile -print0 | \
         xargs -0 sed -i 's|python-config|python2-config|g'
    sed -i '/^cmake_minimum_required/a set(Python_ADDITIONAL_VERSIONS 2.7)' \
         "$srcdir/swift-swift-${_swiftver}/CMakeLists.txt"
    sed -i '/^cmake_minimum_required/a set(Python_ADDITIONAL_VERSIONS 2.7)' \
         "$srcdir/swift-lldb-swift-${_swiftver}/CMakeLists.txt"
    sed -i 's/\<python\>/&2/' \
         "$srcdir/swift-swift-${_swiftver}/utils/build-script-impl"

    # Fix bad include paths
    find "$srcdir" -type f -print0 | \
         xargs -0 sed -i 's|/usr/include/x86_64-linux-gnu|/usr/include|g'

    # Use directory names which build-script expects
    for sdir in llvm clang lldb cmark llbuild; do
        ln -sf swift-${sdir}-swift-${_swiftver} ${sdir}
    done
    for sdir in corelibs-xctest corelibs-foundation integration-tests; do
        ln -sf swift-${sdir}-swift-${_swiftver} swift-${sdir}
    done
    ln -sf swift-swift-${_swiftver} swift
    ln -sf swift-package-manager-swift-${_swiftver} swiftpm

    # Sphinx 1.3.5 raises a warning (promoted to error) when using an unknown
    # syntax highlighting language (like "swift").
    ( cd "${srcdir}/swift" && patch -p1 -i "${srcdir}/swift-no-docs.patch" )
}

build() {
    cd "$srcdir/swift"

    export SWIFT_SOURCE_ROOT="$srcdir"
    export LDFLAGS='-ldl -lpthread'
    utils/build-script -R \
        --lldb --llbuild --swiftpm --xctest --foundation \
        -j "$(lscpu --parse=CPU | grep -v '^#' | wc -l)"
}

check() {
    cd "$srcdir/swift"

    export SWIFT_SOURCE_ROOT="$srcdir"
    utils/build-script -R -t
}

package_swift-development() {
    pkgdesc='The Swift programming language compiler and tools - development snapshot'
    provides=('swift-language')
    conflicts=('swift-language-git' 'swift-git' 'swift-bin' 'swift')
    optdepends=('swift-lldb: Swift REPL and debugger')

    cd "$srcdir/build/Ninja-ReleaseAssert"

    install -dm755 "$pkgdir/usr/bin"
    install -dm755 "$pkgdir/usr/lib/swift"

    # Swift's components don't provide an install target :(
    # These are based on what's included in the binary release packages
    (
        cd swift-linux-$CARCH
        install -m755 bin/swift bin/swift-demangle bin/swift-ide-test "$pkgdir/usr/bin"
        ln -s swift "$pkgdir/usr/bin/swiftc"
        ln -s swift "$pkgdir/usr/bin/swift-autolink-extract"

        install -dm755 "$pkgdir/usr/share/man/man1"
        install -m644 docs/tools/swift.1 "$pkgdir/usr/share/man/man1"

        umask 0022
        cp -rL lib/swift/{clang,glibc,linux,shims} "$pkgdir/usr/lib/swift/"
    )
    (
        cd llbuild-linux-$CARCH
        install -m755 bin/swift-build-tool "$pkgdir/usr/bin"
    )
    (
        cd swiftpm-linux-$CARCH
        install -m755 debug/swift-build "$pkgdir/usr/bin"

        install -dm755 "$pkgdir/usr/lib/swift/pm"
        install -m755 lib/swift/pm/libPackageDescription.so "$pkgdir/usr/lib/swift/pm"
        install -m644 lib/swift/pm/PackageDescription.swiftmodule "$pkgdir/usr/lib/swift/pm"
    )
    (
        cd foundation-linux-$CARCH
        install -m755 Foundation/libFoundation.so "$pkgdir/usr/lib/swift/linux/"
        install -m644 Foundation/Foundation.swiftdoc "$pkgdir/usr/lib/swift/linux/$CARCH"
        install -m644 Foundation/Foundation.swiftmodule "$pkgdir/usr/lib/swift/linux/$CARCH"

        umask 0022
        cp -r Foundation/usr/lib/swift/CoreFoundation "$pkgdir/usr/lib/swift/"
    )
    (
        cd xctest-linux-$CARCH
        install -m755 libXCTest.so "$pkgdir/usr/lib/swift/linux/"
        install -m644 XCTest.swiftdoc "$pkgdir/usr/lib/swift/linux/$CARCH"
        install -m644 XCTest.swiftmodule "$pkgdir/usr/lib/swift/linux/$CARCH"
    )

    # License file
    install -dm755 "$pkgdir/usr/share/licenses/swift"
    install -m644 "$srcdir/swift/LICENSE.txt" "$pkgdir/usr/share/licenses/swift"
}

package_swift-lldb-development() {
    pkgdesc='The Swift programming language debugger (LLDB) and REPL - development snapshot'
    depends=('swift-language' 'python2-six')
    provides=('lldb' 'swift-lldb')
    conflicts=('lldb' 'swift-lldb')
    options=('!strip')  # Don't strip repl_swift -- we need its symbols

    cd "$srcdir/build/Ninja-ReleaseAssert"

    # Install swift-capable lldb
    (
        cd lldb-linux-$CARCH
        DESTDIR="$pkgdir" ninja install
    )

    # This should be provided from python2-six
    rm "$pkgdir/usr/lib/python2.7/site-packages/six.py"
}
