#!/bin/bash
# shellcheck disable=SC2034
# shellcheck disable=SC2154
# Maintainer: Matheus Gabriel Werny de Lima <matheusgwdl@protonmail.com>

pkgname="btcpayserver"
pkgver="1.5.0"
pkgrel="1"
pkgdesc="Accept Bitcoin payments. Free, open-source and self-hosted Bitcoin payment processor."
arch=("any")
url="https://github.com/btcpayserver/${pkgname}"
license=("MIT")
depends=("aspnet-runtime" "bitcoin-daemon" "dotnet-sdk" "nbxplorer")
optdepends=("apache: HTTP server"
"core-lightning: Lightning network support"
"certbot: Creates SSL certificates."
"eclair: Lightning network support"
"lnd: Lightning network support"
"mariadb: Database"
"nginx: HTTP server"
"postgresql: Database"
"sqlite: Database")
source=("${pkgname}-v${pkgver}.tar.gz::${url}/archive/refs/tags/v${pkgver}.tar.gz")
sha512sums=("d4c10b651c40c85a897fc9bcbbaa471d36d7b01290c12cd975becc244f3e2e89faab10ffb8577fafd670c46d75a4f7af41ac556f75a640673d5522d80dfa7475")

build()
{
    dotnet build -c Release "${srcdir}"/"${pkgname}"-"${pkgver}"/BTCPayServer/BTCPayServer.csproj
}

package()
{
    # Assure that the directories exist.
    mkdir -p "${pkgdir}"/usr/bin/
    mkdir -p "${pkgdir}"/usr/share/doc/"${pkgname}"/
    mkdir -p "${pkgdir}"/usr/share/licenses/"${pkgname}"/
    mkdir -p "${pkgdir}"/usr/share/webapps/"${pkgname}"/

    # Install the software.
    cp -r "${srcdir}"/"${pkgname}"-"${pkgver}"/* "${pkgdir}"/usr/share/webapps/"${pkgname}"/

    ## Create an executable.
    echo -e "#!/bin/bash

dotnet run --no-launch-profile --no-build -c Release --project /usr/share/webapps/\"${pkgname}\"/BTCPayServer/BTCPayServer.csproj -- \"\${@}\"" > "${pkgdir}"/usr/bin/"${pkgname}"
    chmod 755 "${pkgdir}"/usr/bin/"${pkgname}"

    # Install the documentation.
    install -Dm644 "${srcdir}"/"${pkgname}"-"${pkgver}"/README.md "${pkgdir}"/usr/share/doc/"${pkgname}"/
    cp -r "${srcdir}"/"${pkgname}"-"${pkgver}"/docs/* "${pkgdir}"/usr/share/doc/"${pkgname}"/
    chmod -R 644 "${pkgdir}"/usr/share/doc/"${pkgname}"/

    # Install the license.
    install -Dm644 "${srcdir}"/"${pkgname}"-"${pkgver}"/LICENSE "${pkgdir}"/usr/share/licenses/"${pkgname}"/

    # Information
    echo -e "\033[0;32mConfiguration is needed after the installation. For assistance, read the included \"README.md\".\033[0m"
}
