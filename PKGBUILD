# Upstream: RuneScape Linux <noreply@jagex.com>
# Contributor: Ivan Puntiy <ivan.puntiy-at-gmail>
# Contributor: Mantas Mikulėnas <grawity@gmail.com>

pkgname=runescape-launcher
pkgver=2.2.7
pkgrel=5
pkgdesc="RuneScape Game Client (NXT)"
arch=(x86_64)
license=(custom)
url="https://www.runescape.com/"
depends=(
    cairo
    gcc-libs
    gdk-pixbuf2
    gtk2
    libcap
    libsm
    libx11
    libxxf86vm
    openssl
    pango
    sdl2
)
source=("${pkgname}_${pkgver}_Release::https://content.runescape.com/downloads/ubuntu/dists/trusty/Release"
        "${pkgname}_${pkgver}_Release.gpg::https://content.runescape.com/downloads/ubuntu/dists/trusty/Release.gpg")
source_x86_64=("${pkgname}_${pkgver}_Packages::https://content.runescape.com/downloads/ubuntu/dists/trusty/non-free/binary-amd64/Packages"
               "${pkgname}_${pkgver}_amd64.deb::https://content.runescape.com/downloads/ubuntu/pool/non-free/r/$pkgname/${pkgname}_$pkgver_amd64.deb")
#_dir=2020/rs20200325
#source=("${pkgname}_${pkgver}_Release::https://nullroute.eu.org/tmp/$_dir/runescape-launcher_${pkgver}_Release"
#        "${pkgname}_${pkgver}_Release.gpg::https://nullroute.eu.org/tmp/$_dir/runescape-launcher_${pkgver}_Release.gpg")
#source_x86_64=("${pkgname}_${pkgver}_Packages::https://nullroute.eu.org/tmp/$_dir/runescape-launcher_${pkgver}_Packages"
#               "${pkgname}_${pkgver}_amd64.deb::https://nullroute.eu.org/tmp/$_dir/runescape-launcher_${pkgver}_amd64.deb")
sha256sums=('SKIP'
            'SKIP')
sha256sums_x86_64=('SKIP'
                   'SKIP')
validpgpkeys=("AAC9264309E4D717441DB9527373B12CE03BEB4B")
install="install.sh"

# avoid caching in makepkg!
SRCDEST=$startdir

_msg() {
    printf '%s\n' "$*"
}

_err() {
    printf '\e[1;31mError:\e[m %s\n' "$*" >&2
}

_verify_repo() {
    if (( SKIPPGPCHECK )); then
        return 0
    fi

    local Release=${source[0]%%::*}
    local Packages=${source_x86_64[0]%%::*}
    local debfile=${source_x86_64[1]%%::*}
    local jagexpgpkey=${validpgpkeys[0]}
    local _out

    _msg "Verifying 'Release' file (PGP)..."

    if ! _out=$(gpg --batch --status-fd 1 \
                    --trust-model always \
                    --verify "$Release.gpg" "$Release" \
                    2>&1); then
        _err "PGP signature of 'Release' could not be verified"
        echo "$_out" | grep -v "^\\[GNUPG:\\]"
        return 1
    elif ! egrep -qs "^\\[GNUPG:\\] VALIDSIG $jagexpgpkey " <<< "$_out"; then
        _err "PGP signature of 'Release' was not made by Jagex"
        echo "$_out" | grep -v "^\\[GNUPG:\\]"
        return 1
    fi

    _msg "Parsing 'Release' file..."

    _out=$(awk 'ok && $3 == "non-free/binary-amd64/Packages" {print $1; exit}
                /^[^[:space:]]/ {ok=0}
                /^SHA256:$/ {ok=1}' < "$Release")
    if ! [[ $_out =~ ^[0-9a-f]{64}$ ]]; then
        _err "Could not find hash of 'non-free/binary-amd64/Packages' in the 'Release' file"
        return 1
    fi

    _msg "Verifying 'Packages' file (SHA256)..."

    if ! sha256sum --quiet --check <<< "$_out *$Packages"; then
        _err "Hash sum of 'Packages' did not match expected"
        return 1
    fi

    _msg "Parsing 'Packages' file..."

    _out=$(awk 'ok && /^SHA256:/ {print $2; exit}
                /^Package:/ {ok=0}
                /^Package: runescape-launcher$/ {ok=1}' < "$Packages")
    if ! [[ $_out =~ ^[0-9a-f]{64}$ ]]; then
        _err "Could not find hash of '$debfile' in the 'Packages' file"
        return 1
    fi

    _msg "Verifying '$debfile' (SHA256)..."

    if ! sha256sum --quiet --check <<< "$_out *$debfile"; then
        _err "Hash sum of '$debfile' did not match expected"
        return 1
    fi
}

prepare() {
    _verify_repo

    rm -rf "$srcdir/$pkgname-$pkgver"
    mkdir "$srcdir/$pkgname-$pkgver"
    cd "$srcdir/$pkgname-$pkgver"

    _msg "Extracting control files..."
    bsdtar xvf ../control.tar.xz

    _msg "Extracting data files..."
    bsdtar xvf ../data.tar.xz
}

package() {
    cd "$srcdir/$pkgname-$pkgver"

    cp -a usr "$pkgdir"

    # XXX: maybe move the binary out of /usr/share to where it belongs
    #mkdir -p "$pkgdir"/usr/lib/runescape-launcher
    #mv "$pkgdir"/usr/{share/games,lib}/runescape-launcher/runescape
    #sed -i 's,/usr/share/games,/usr/lib,' "$pkgdir"/usr/bin/runescape-launcher

    install -Dm0644 copyright "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}

# vim: ft=sh:ts=4:sw=4:et:nowrap
