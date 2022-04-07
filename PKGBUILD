#!/bin/bash
# shellcheck disable=SC2034
# shellcheck disable=SC2154
# Maintainer: Matheus Gabriel Werny de Lima <matheusgwdl@protonmail.com>

_pkgname="NBXplorer"

pkgname="nbxplorer"
pkgver="2.3.13"
pkgrel="1"
pkgdesc="A minimalist UTXO tracker for HD wallets."
arch=("any")
url="https://github.com/dgarage/${_pkgname}"
license=("MIT")
depends=("aspnet-runtime" "bitcoin-daemon" "dotnet-sdk")
source=("${pkgname}-v${pkgver}.tar.gz::${url}/archive/refs/tags/v${pkgver}.tar.gz")
sha512sums=("9fc1aeacdfa9c5a23794ee117215ac3abbf54c74f50eaef235692a1bacdc1ebf83c3407b9a03e9bfb741b4a1ddf57cad22e2a6cf90798bdacad88534ac0e69fe")

build()
{
    dotnet build -c Release "${srcdir}"/"${_pkgname}"-"${pkgver}"/NBXplorer/NBXplorer.csproj
}

package()
{
    # Assure that the directories exist.
    mkdir -p "${pkgdir}"/usr/bin/
    mkdir -p "${pkgdir}"/usr/share/"${_pkgname}"/
    mkdir -p "${pkgdir}"/usr/share/doc/"${_pkgname}"/
    mkdir -p "${pkgdir}"/usr/share/licenses/"${_pkgname}"/

    # Install the software.
    cp -r "${srcdir}"/"${_pkgname}"-"${pkgver}"/* "${pkgdir}"/usr/share/"${_pkgname}"/

    ## Create an executable.
    echo -e "#!/bin/bash

dotnet run --no-launch-profile --no-build -c Release --project /usr/share/\"${_pkgname}\"/NBXplorer/NBXplorer.csproj -- \"\${@}\"" > "${pkgdir}"/usr/bin/"${pkgname}"
    chmod 755 "${pkgdir}"/usr/bin/"${pkgname}"

    # Install the documentation.
    install -Dm644 "${srcdir}"/"${_pkgname}"-"${pkgver}"/README.md "${pkgdir}"/usr/share/doc/"${_pkgname}"/
    cp -r "${srcdir}"/"${_pkgname}"-"${pkgver}"/docs/* "${pkgdir}"/usr/share/doc/"${_pkgname}"/
    chmod -R 644 "${pkgdir}"/usr/share/doc/"${_pkgname}"/

    # Install the license.
    install -Dm644 "${srcdir}"/"${_pkgname}"-"${pkgver}"/LICENSE "${pkgdir}"/usr/share/licenses/"${_pkgname}"/
}
