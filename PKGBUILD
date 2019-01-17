# Maintainer: NicoHood <archlinux {cat} nicohood {dog} de>
# PGP ID: 97312D5EB9D7AE7D0BD4307351DAE9B7C1AE9161
# Contributor: Ashley Whetter <(firstname) @ awhetter.co.uk>
# Contributor: Eothred <yngve.levinsen@gmail.com>

pkgname=spotify-stable
pkgver=1.0.96.181
_commit=gf6bc1b6b
_ver_x86_64=12
#_ver_i686=12
pkgrel=1
pkgdesc='A proprietary music streaming service'
arch=('x86_64')
license=('custom')
url='https://www.spotify.com'
depends=('alsa-lib>=1.0.14' 'gconf' 'gtk2' 'glib2' 'nss' 'libsystemd' 'libxtst'
         'libx11' 'libxss' 'desktop-file-utils' 'rtmpdump' 'openssl-1.0')
depends_x86_64=('libcurl-gnutls')
depends_i686=('libcurl-compat')
optdepends=('ffmpeg-compat-57: Adds support for playback of local files'
            'zenity: Adds support for importing local files'
            'libnotify: Desktop notifications')
options=('!strip')
provides=('spotify')
conflicts=('spotify')

# http://repository.spotify.com/dists/stable/Release
# http://repository.spotify.com/dists/stable/non-free/binary-amd64/Packages
# http://repository.spotify.com/dists/stable/non-free/binary-i386/Packages
# http://repository.spotify.com/dists/stable/Release.gpg
source=('spotify.sh'
        'spotify.protocol'
        'LICENSE'
        "${pkgname}-${pkgver}-Release::http://repository.spotify.com/dists/stable/Release"
        "${pkgname}-${pkgver}-Release.sig::http://repository.spotify.com/dists/stable/Release.gpg")
source_x86_64=("${pkgname}-${pkgver}-x86_64.deb::https://repository-origin.spotify.com/pool/non-free/s/spotify-client/spotify-client_${pkgver}.${_commit}-${_ver_x86_64}_amd64.deb"
               "${pkgname}-${pkgver}-x86_64-Packages::http://repository.spotify.com/dists/stable/non-free/binary-amd64/Packages")
# source_i686=("${pkgname}-${pkgver}-i686.deb::https://repository-origin.spotify.com/pool/non-free/s/spotify-client/spotify-client_${pkgver}.${_commit}-${_ver_i686}_i386.deb"
#              "${pkgname}-${pkgver}-i686-Packages::http://repository.spotify.com/dists/stable/non-free/binary-i386/Packages")
sha512sums=('e637d4e211caf1a7ee7bf3e39b7f4cb9c66ba141bc66c6d3b59660a4ab8c1bf9444045b12bc730e7a96d0b7c554fb35cf56a56b564d3e69c667ef6a70f912d23'
            '999abe46766a4101e27477f5c9f69394a4bb5c097e2e048ec2c6cb93dfa1743eb436bde3768af6ba1b90eaac78ea8589d82e621f9cbe7d9ab3f41acee6e8ca20'
            '2e16f7c7b09e9ecefaa11ab38eb7a792c62ae6f33d95ab1ff46d68995316324d8c5287b0d9ce142d1cf15158e61f594e930260abb8155467af8bc25779960615'
            '6a2bd376f7d3f194ca8f57108e5f9654591c7df8fca6facacb0ca224ddd679297f0274e57e51d0263828ce8300c565e8302dad5d3b54d2c476ff4658b60c0772'
            'SKIP')
sha512sums_x86_64=('8ecff0657849058863deb8fce9304d4c9aa5a511f8043a0ba52d138a29979d3217da7568ab2058271f3e448206406fc0e1651ba7d438f677b1a2036ecb5937e2'
                   'e302e4021b83855258f6de99609343b81e1fbd82fa3be7981dd747d2875c64bcaf9b82d8bfedd94d479f513aa1751d3ab5a321dfb2f91221e35222def1173618')
# Old key: 0DF731E45CE24F27EEEB1450EFDC8610341D9410
# Old key (17.12.2018): 931FF8E79F0876134EDDBDCCA87FF9DF48BF1C90
validpgpkeys=('931FF8E79F0876134EDDBDCCA87FF9DF48BF1C90') # Spotify <tux@spotify.com>

# Spotify uses different names for the arch
if [ "${CARCH}" = "i686" ]; then
    _SPOTIFY_ARCH=i386
else
    _SPOTIFY_ARCH=amd64
fi

prepare() {
    # Validate hashes from the PGP signed "Release" file
    echo "$(grep non-free/binary-${_SPOTIFY_ARCH}/Packages ${pkgname}-${pkgver}-Release | tail -n 2 | head -n 1 | awk '{print $1}') ${pkgname}-${pkgver}-${CARCH}-Packages" \
        > "${pkgname}-${pkgver}-${CARCH}-Packages.sha256"
    sha256sum -c "${pkgname}-${pkgver}-${CARCH}-Packages.sha256"

    echo "$(grep SHA512 ${pkgname}-${pkgver}-${CARCH}-Packages | head -n 1 | awk '{print $2}') ${pkgname}-${pkgver}-${CARCH}.deb" \
        > "${pkgname}-${pkgver}-${CARCH}.deb.sha512"
    sha512sum -c "${pkgname}-${pkgver}-${CARCH}.deb.sha512"
}

package() {
    cd "${srcdir}"

    tar -xzf data.tar.gz -C "${pkgdir}"

    install -Dm644 "${pkgdir}"/usr/share/spotify/spotify.desktop "${pkgdir}"/usr/share/applications/spotify.desktop
    install -Dm644 "${pkgdir}"/usr/share/spotify/icons/spotify-linux-512.png "${pkgdir}"/usr/share/pixmaps/spotify-client.png

    for size in 22 24 32 48 64 128 256 512; do
        install -Dm644 "${pkgdir}/usr/share/spotify/icons/spotify-linux-$size.png" \
            "${pkgdir}/usr/share/icons/hicolor/${size}x${size}/apps/spotify.png"
    done
    rm -r "${pkgdir}/usr/share/spotify/icons/"

    # Move spotify binary to its proper location and instal wrapper script
    mkdir -p "${pkgdir}"/opt/spotify
    mv "${pkgdir}/usr/share/spotify" "${pkgdir}/opt/"
    rm "${pkgdir}"/usr/bin/spotify
    # TODO symlink instead
    install -Dm755 "${srcdir}/spotify.sh" "${pkgdir}/usr/bin/spotify"

    # Copy protocol file for KDE
    install -Dm644 "${srcdir}/spotify.protocol" "${pkgdir}/usr/share/kservices5/spotify.protocol"

    # Install license
    # https://www.spotify.com/legal/end-user-agreement
    install -Dm 644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

    # Fix permissions
    chmod -R go-w "${pkgdir}"
}
