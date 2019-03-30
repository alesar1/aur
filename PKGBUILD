# Maintainer: Cebtenzzre <cebtenzzre (at) gmail (dot) com>

# PRE-BUILD INSTRUCTIONS:
# -----------------------
#
# There is no public mirror for the ThinLinc server.
# Download it by registering here:
# https://www.cendio.com/thinlinc/download/registration
#
# Place the downloaded file in the same directory as this PKGBUILD.
# You can also set up a tlserver:// DLAGENT in /etc/makepkg.conf.

pkgname=thinlinc-server
pkgver=4.10.0
pkgrel=1
pkgdesc="Cendio ThinLinc Linux remote desktop server"
arch=('i686' 'x86_64')
url="http://www.cendio.com/"
license=('custom')
install=${pkgname}.install

depends=('python2' 'net-tools' 'procps-ng' 'xorg-xauth' 'pcsclite'
         'java-environment' 'nspr' 'nss' 'ghostscript' 'smtp-forwarder'
         'ncurses5-compat-libs' 'pulseaudio' 'xdg-utils')
optdepends=('nfs-utils: Local drive redirection'
            'python2-ldap: LDAP integration tools'
            'apache: Web integration'
            'mod_nss: Web integration')

_archive_name=tl-${pkgver}-server

source=("tlserver://${_archive_name}.zip"
        'LICENSE'
        'tlwebaccess.service'
        'tlwebadm.service'
        'vsmagent.service'
        'vsmserver.service')
sha256sums=('f8fe29e9706872c48a922a266cec226c496d45c346d965ee44aad8c6adb40b6c'
            '179583f1e2f61a9a75a99bbe8bb988e35a0216fc2ddcbd4c85ad8bdc70c3149e'
            '8e70ef23f9716dcb100eba660932e7f5d05351d63074fb262cf925812dbdbb63'
            '5a92c5beac6c64487debd92a4d94b56074b9f9b0cd38d154a14a320105f3bccd'
            '292e6ef1295f329ab95d1d16c5bf7286f5c5c288d6637d0d736b9a144e85449d'
            'a1fe20c565e7e468407d73a0f59c8c352318a7e4c8e85fe068d89cbb0afd5e71')

_extract_dir="extract"

DLAGENTS+=("tlserver::/usr/bin/echo Could not find %u.  Please read the PKGBUILD.")

build()
{
    cd "${srcdir}/${_archive_name}/packages"
    mkdir -p "${_extract_dir}"

    for rpm in *${CARCH}*rpm *noarch*rpm; do
        bsdtar -C "${_extract_dir}" -xf "${rpm}"
    done

    cd "${_extract_dir}"
    [[ "$CARCH" == "x86_64" ]] && mkdir "usr" && mv "lib64" "usr/lib"
    rm -Rf "etc/init.d"
}

package()
{
    cd "${srcdir}/${_archive_name}/packages/${_extract_dir}"
    cp -aR etc/ opt/ usr/ var/ "$pkgdir"

    install -dm755 "$pkgdir"/usr/lib
    cp -aR lib64/* "$pkgdir"/usr/lib

    cd "$srcdir"
    install -Dm644 LICENSE             "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
    install -Dm644 tlwebaccess.service "$pkgdir"/usr/lib/systemd/system/tlwebaccess.service
    install -Dm644 tlwebadm.service    "$pkgdir"/usr/lib/systemd/system/tlwebadm.service
    install -Dm644 vsmagent.service    "$pkgdir"/usr/lib/systemd/system/vsmagent.service
    install -Dm644 vsmserver.service   "$pkgdir"/usr/lib/systemd/system/vsmserver.service
}
