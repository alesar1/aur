

# Manually written

pkgname='rpkdev'
uniq='tssoftware:rpkg'
appname='RPkgDev'
alias='RPkgDev'
pkgdesc='.rpk package build tool'
author='TS'
type='library'
pkgver='1.0.0'
platforms=( 'all' )
deps=( )
groups=( 'Developer/Packaging' 'CLI/Tool/PackageManager' )
pkgdir='/tmp/tmp.HVYWDJPZSf/sh/pkg'
pkgrel=1

arch=(  'any' )

depends=( )
makedepends=( )

_b="https://content.tssoftware.eu/binary/"
source=( "${_b}/rpkdev" "${_b}/libconquery.so" "${_b}/libnfd.so" "${_b}/libLT.so" "${_b}/libTSMLParser.so")
noextract=( "rpkdev" "libconquery.so" "libnfd.so" "libLT.so" "libTSMLParser.so" )

sha256sums=( "SKIP" "SKIP" "SKIP" "SKIP" "SKIP" )

prepare() {
    cd "${srcdir}"
#     sha256sum -c checksums.sha256
}

build() {
    echo -n
#     if [ "$remote" == 1 ]; then
#         echo "srcdir: $srcdir"
#         echo "pkgname: $pkgname"
#         getpkg "$uniq" "$pkgname" "$srcdir"
#     fi
#     [ -f Makefile ] && make -j 4 || ninja
}
package() { 
    targ="$pkgdir/usr/share/rpkdev/"
    mkdir -p "$targ"
    dir -1 "$srcdir/" | while read f; do
        mv "$(realpath "$srcdir/$f")" "$targ/"
    done
    chmod -R 755 "$targ"
    
    targ="$pkgdir/usr/bin"
    mkdir -p "$targ"
    echo '#!/bin/sh
    LD_LIBRARY_PATH=/usr/share/rpkdev /usr/share/rpkdev/rpkdev $@
    ' > "$targ/rpkdev"
    chmod -R 755 "$targ"
#     echo "Packaging of tspkg started."
#     if [ "$remote" == 1 ]; then
#         projdir="$srcdir"
#     fi
#     cd "$projdir/"
# #     echo "PWD: $PWD"
#     for((i = 0; i < ${#contents[@]}; i++)); do
# #         echo "#contents: ${#contents[@]}"
#         IFS="<" read -a sp <<< "${contents[$i]}"
# #         echo "#contents: ${#contents[@]}"
#
# #         echo ln -sf "$(trimstr "${sp[1]}")}" "$pkgdir/$(tspkg_convpath "$(trimstr "${sp[0]}")")"
#         inpkg_path="$(tspkg_convpath <<< "$(trimstr "${sp[0]}")")"
#         mkdir -p "$pkgdir/$(dirname "$inpkg_path")"
#         cp -R "$(realpath "$(trimstr "${sp[1]}")")" "$pkgdir/$inpkg_path"
#     done
}        



