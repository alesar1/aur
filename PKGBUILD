# Maintainer: Grey Christoforo <first name [at] last name [dot] net>

pkgname=wingide
_wingver=5.1.12
_wingrel=1
_wing_patch_lvl=4 #bump this when adding a patch
pkgver=$_wingver.$_wingrel.$_wing_patch_lvl
pkgrel=1
pkgdesc="Wing IDE Professional is the full-featured Python IDE for professional programmers."
url="http://www.wingware.com"
license=('custom')
arch=('i686' 'x86_64')
[ "$CARCH" = 'i686' ] && _pkgarch=i386
[ "$CARCH" = 'x86_64' ] && _pkgarch=x86_64
_wingpatch_x86_64=("detect-bad-window-sizes-5.1.12p1-all.tar" "pyc3351-5.1.12p3-all.tar")
_wingpatch_i686=("detect-bad-window-sizes-5.1.12p1-all.tar" "pyc3351-5.1.12p3-all.tar")
_patch_url_prefix=http://wingware.com/pub/$pkgname/$_wingver/patches/
if [[ ! -z "$_wingpatch_x86_64" ]]; then
    _wingpatch_x86_64=( "${_wingpatch_x86_64[@]/#/$_patch_url_prefix}" )
fi
if [[ ! -z "$_wingpatch_i686" ]]; then
    _wingpatch_i686=( "${_wingpatch_i686[@]/#/$_patch_url_prefix}" )
fi
source_x86_64=("http://wingware.com/pub/$pkgname/$_wingver/$pkgname-$_wingver-$_wingrel-x86_64-linux.tar.gz" ${_wingpatch_x86_64[*]})
source_i686=("http://wingware.com/pub/$pkgname/$_wingver/$pkgname-$_wingver-$_wingrel-i386-linux.tar.gz" ${_wingpatch_i686[*]})
depends=('hicolor-icon-theme' 'libpng' 'python2' 'xdg-utils')
options=(!strip !emptydirs)
md5sums_i686=('6d3e20447ea2b772e4da38bf02c81031'
              '19a4bb32566a523d1acc677c8456c938'
              'e983a04ccf2572bbfc48e3131b6d4635')
md5sums_x86_64=('52b7f26a71e2a1ea9cbb51ade7181825'
                '19a4bb32566a523d1acc677c8456c938'
                'e983a04ccf2572bbfc48e3131b6d4635')
install=${pkgname}.install

prepare() {
    cd "$srcdir/$pkgname-$_wingver-$_wingrel-$_pkgarch-linux"
    sed -i 's/python/python2/' wing-install.py
}

package() {
    cd "$srcdir/$pkgname-$_wingver-$_wingrel-$_pkgarch-linux"
    ./wing-install.py \
        --install-binary \
        --winghome "${pkgdir}/opt/${pkgname}" \
        --bin-dir ${pkgdir}/usr/bin > /dev/null 2>&1

    # Correct the WINGHOME environment variable
    sed -i "s|${pkgdir}||" ${pkgdir}/opt/${pkgname}/wingdbstub.py
    sed -i "s|${pkgdir}||" ${pkgdir}/opt/${pkgname}/wing

    # Correct ARCH environment variable
    sed -i 's|ARCH=`arch`|ARCH=`uname -m`|' ${pkgdir}/opt/wingide/run-wing.sh
    # Fix a bug in the script
    sed -i "s|'x86_64'\]|'x86_64' \]|" ${pkgdir}/opt/wingide/run-wing.sh

    # Copy over patch (if any)
    if [ -d ../patches ]; then
        cp -r ../patches ${pkgdir}/opt/${pkgname}/.
    fi

    # Correct the file permissions
    chown -R root:root "${pkgdir}/opt/${pkgname}"
    chmod +x ${pkgdir}/opt/${pkgname}/resources/linux/desktop/install-linux-desktop.sh
    # Install the LICENSE
    install -D -m 644 "${pkgdir}/opt/${pkgname}/LICENSE.txt" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
