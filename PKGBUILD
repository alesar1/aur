# This file has been AUTO-GENERATED by crosspkg utility, which is part of TSPkg project (tssoftware.eu)
# Please do NOT edit by hand


set -e

                baseurl='https://content.tssoftware.eu/scripts/rpk_compat/'; 
                eval "$(curl $baseurl/libcrosspkg.sh)"$'\n'
                eval "$(curl $baseurl/libcrosspkg_remote.sh)"
                export remote=1
            
pkgname='lib-lt-headers'
uniq='tssoftware:lt'
appname=''
alias=''
pkgdesc='LT Widget toolkit headers'
author='TS'
type='library'
pkgver='1.0.0'
platforms=( 'all' )
deps=( 'rcore/libsdl:lib-sdl2' 'rcore/libsdl:lib-sdl2_image' 'rcore/libsdl:lib-sdl2_mixer' 'rcore/freetype:lib-freetype2' )
groups=( 'Library/WidgetToolkit' )
contents=( '/headers<lt_headers/' )
pkgdir='/tmp/tmp.So4REBu2cN/sh/pkg'
options=( '!strip' )
pkgrel=1

arch=(  'any' )

depends=( 'sdl2' 'sdl2_image' 'sdl2_mixer' 'freetype2' )
makedepends=( rpkdev )
abstorel(){
    sed -E 's/^\/+//g'
}

build() {
    if [ "$remote" == 1 ]; then
        echo "srcdir: $srcdir"
        echo "pkgname: $pkgname"
        cd "$srcdir"
        getpkg "$uniq" "$pkgname" "$pkgver"
    fi
#     [ -f Makefile ] && make -j 4 || ninja
}
run(){
    echo ">>> $@"
    $@
}
package() { 
    echo "Conversion of tspkg started."
    if [ "$remote" == 1 ]; then
        projdir="$srcdir"
    fi
    cd "$projdir/$pkgname"
#     echo "PWD: $PWD"
#     for((i = 0; i < ${#contents[@]}; i++)); do
    dir -1 "./" | while read f; do
#         echo "#contents: ${#contents[@]}"
#         IFS="<" read -a sp <<< "${contents[$i]}"
#         echo "#contents: ${#contents[@]}"
        
#         echo ln -sf "$(trimstr "${sp[1]}")}" "$pkgdir/$(tspkg_convpath "$(trimstr "${sp[0]}")")"
        nativepth="$(tspkg_convpath <<< "$(trimstr "${f}")")"
#         echo "nativepth: $nativepth"
#         echo "pkgdir: $pkgdir"
        mkdir -p "$pkgdir/$(dirname "$nativepth")"
        run cp -R "$(abstorel <<< "${f}")" "$pkgdir/$(abstorel <<< "$nativepth")"
#         cp -R "$(realpath "$(trimstr "${sp[1]}")")" "$pkgdir/$inpkg_path"
    done
    chmod -R 755 "$pkgdir/"
}        
