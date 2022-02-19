# Maintainer: Luke Arms <luke@arms.to>

pkgname=stretchly-git
_pkgname=${pkgname%-git}
pkgver=1068.6392f38
pkgrel=1
pkgdesc="The break time reminder app"
arch=('any')
url="https://github.com/hovancik/stretchly/"
license=('BSD')
# 'electron' has been temporarily removed to mitigate an issue where Stretchly
# break windows render without colour or text, so Electron is packaged with
# Stretchly for now. See:
# - https://github.com/hovancik/stretchly/issues/1048
# - https://github.com/electron/electron/issues/32133
depends=('gtk3' 'libnotify' 'nss' 'libxss' 'libxtst' 'xdg-utils' 'at-spi2-atk' 'util-linux-libs' 'libsecret' 'libappindicator-gtk3' 'libxcrypt-compat')
#depends=('gtk3' 'libnotify' 'nss' 'libxss' 'libxtst' 'xdg-utils' 'at-spi2-atk' 'util-linux-libs' 'libsecret' 'libappindicator-gtk3' 'libxcrypt-compat' 'electron')
makedepends=('git' 'nvm' 'jq' 'python')
provides=("$_pkgname")
conflicts=("$_pkgname" "${_pkgname}-bin")
source=("git+https://github.com/hovancik/stretchly.git")
sha256sums=('SKIP')

pkgver() {
    cd "${srcdir}/${_pkgname}"
    printf '%s.%s' \
        "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

_ensure_local_nvm() {
    if type nvm &>/dev/null; then
        nvm deactivate
        nvm unload
    fi
    unset npm_config_prefix
    export NVM_DIR=${srcdir}/.nvm
    . /usr/share/nvm/init-nvm.sh
}

prepare() {
    cd "${srcdir}/${_pkgname}"
    _ensure_local_nvm
    _node_version=$(jq -r '.engines.node' package.json)
    # ` || false` is a workaround until this upstream fix is released:
    # https://github.com/nvm-sh/nvm/pull/2698
    nvm ls "$_node_version" &>/dev/null ||
        nvm install "$_node_version" || false
    nvm use "$_node_version"
    npm install --no-save --no-audit --no-progress --no-fund
}

build() {
    cd "${srcdir}/${_pkgname}"
    _ensure_local_nvm
    nvm use "$_node_version"
    # electron-builder only generates /usr/share/* assets for target package
    # types 'apk', 'deb', 'freebsd', 'p5p', 'pacman', 'rpm' and 'sh', so build a
    # pacman package and unpack it
    local _outfile _appname _unpackdir=${srcdir}/${_pkgname}.unpacked
    _outfile=dist/$(jq -r '"\(.name)-\(.version)"' package.json).pacman
    _appname=$(jq -r .name package.json)
    rm -Rf "${_unpackdir}"
    mkdir -p "${_unpackdir}"
    local i686=ia32 x86_64=x64
    ./node_modules/.bin/electron-builder build \
        --linux pacman \
        --"${!CARCH}"
    tar -C "${_unpackdir}" -Jxf "${_outfile}"
    #local _electron=${_unpackdir}/opt/${_appname}/${_pkgname}
    #echo "Deleting Electron ($(du -h "$_electron" | awk '{print $1}'))..." >&2
    #rm -v "$_electron"
    ## Replace absolute path in desktop entry
    #sed -Ei "s/^(Exec=).*/\1stretchly/" \
    #    "${_unpackdir}/usr/share/applications/${_pkgname}.desktop"
    # Create /usr/bin/stretchly
    #install -D -m 0755 /dev/null "${_unpackdir}/usr/bin/stretchly"
    #cat >"${_unpackdir}/usr/bin/stretchly" <<EOF
    ##!/bin/sh
    #exec electron '/opt/$(sed -E "s/'/'\\\\''/g" <<<"${_appname}")/resources/app.asar' "\$@"
    #EOF
    install -d "${_unpackdir}/usr/bin"
    ln -s "/opt/${_appname}/stretchly" "${_unpackdir}/usr/bin/stretchly"
}

package() {
    mv "${srcdir}/${_pkgname}.unpacked/"{usr,opt} "${pkgdir}"
    install -D -m 0644 "${srcdir}/${_pkgname}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
