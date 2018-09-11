# Maintainer: Daniel Bermond < yahoo-com: danielbermond >

pkgname=pingo
pkgver=0.98.15
pkgrel=3
pkgdesc='An experimental, fast Web PNG/JPG optimizer with visually lossless or lossy compression (uses wine)'
arch=('x86_64')
url='https://css-ig.net/pingo'
license=('unknown')
depends=('bash' 'wine')
conflicts=('pingo-bin')
options=('!strip')
source=('git+https://github.com/dbermond/shellutils.git')
sha256sums=('SKIP')

_expected_sha256sum='fb92832ee8fa07fba8eae2a7d1f7fd2f2d317d9e2fe059b0c837e4ccde2cfc70'
_srcfile="pingo-${pkgver}.zip"
_srcurl='https://css-ig.net/downloads/zip/pingo.zip'
_useragent="User-Agent: Mozilla/5.0 (X11; Linux ${CARCH}) \
                        AppleWebKit/537.36 (KHTML, like Gecko) \
                        Chrome/69.0.3497.81 \
                        Safari/537.36"
_useragent="$(printf '%s' "$_useragent" | sed 's/[[:space:]]\+/ /g')"

_exit_makepkg() {
    printf '%s\n' "error: failed to ${1} ${_srcfile}"
    exit 1
}

prepare() {
    # check if pingo zip file was already downloaded
    if ! [ -f "${startdir}/${_srcfile}" ] 
    then
        # download pingo zip file from website
        msg2 "Downloading ${_srcfile} from website..."
        curl \
            -o "${startdir}/${_srcfile}" \
            -H 'Accept-Encoding: gzip, deflate, br' \
            -H 'Accept-Language: en-US,en;q=0.9' \
            -H 'Upgrade-Insecure-Requests: 1' \
            -H "$_useragent" \
            -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8' \
            -H 'Referer: https://css-ig.net/pingo.php' \
            -H 'Cookie: HttpOnly; HttpOnly; HttpOnly; startBAK=R3415750288; start=R3918464565' \
            -H 'Connection: keep-alive' \
            --compressed \
            "$_srcurl" || _exit_makepkg 'download'
    else
        msg2 "Found ${_srcfile}"
    fi
    
    # check the pingo zip file integrity (file validation)
    msg2 "Validating ${_srcfile} with sha256sum..."
    local _real_sha256sum="$(openssl dgst -sha256 "${startdir}/${_srcfile}" || _exit_makepkg 'calculate SHA256 of')"
    _real_sha256sum="${_real_sha256sum##* }"
    printf '%s' "     ${_srcfile} ... "
    if [ "$_expected_sha256sum" = "$_real_sha256sum" ] 
    then
        printf '%s\n' 'Passed'
    else
        printf '%s\n' 'FAILED'
        exit 1
    fi
    
    # create symbolic link of pingo zip file in $srcdir
    ln -sf "${startdir}/${_srcfile}" "${srcdir}/${_srcfile}" || _exit_makepkg 'create symbolic link of'
    
    # extract pingo zip file
    mkdir -p "${pkgname}-${pkgver}"
    cd       "${pkgname}-${pkgver}"
    bsdtar -xf "../${_srcfile}" || _exit_makepkg 'extract'
}

package() {
    install -D -m755 "shellutils/image/pingo"         -t "${pkgdir}/usr/bin"
    install -D -m644 "${pkgname}-${pkgver}/pingo.exe" -t "${pkgdir}/usr/share/${pkgname}"
}
