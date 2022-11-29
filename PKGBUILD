#!/usr/bin/env bash
# shellcheck disable=SC2034
# shellcheck disable=SC2154
# The PKGBUILD for BTCPayServer.
# Maintainer: Matheus <matheusgwdl@protonmail.com>
# Contributor: Matheus <matheusgwdl@protonmail.com>

pkgname="btcpayserver"
pkgver="1.7.1"
pkgrel="1"
pkgdesc="Accept Bitcoin payments. Free, open-source and self-hosted Bitcoin payment processor."
arch=("x86_64")
url="https://github.com/btcpayserver/${pkgname}"
license=("MIT")
depends=("aspnet-runtime" "bash" "dotnet-sdk" "lib32-glibc" "nbxplorer")
optdepends=("apache: HTTP server"
    "core-lightning: Lightning Network support"
    "certbot: Creates SSL certificates."
    "eclair: Lightning Network support"
    "lnd: Lightning Network support"
    "mariadb: Database"
    "nginx: HTTP server"
    "postgresql: Database"
    "sqlite: Database")
install="${pkgname}.install"
source=("${pkgname}-v${pkgver}.tar.gz::${url}/archive/refs/tags/v${pkgver}.tar.gz"
    "${pkgname}.sh")
sha512sums=("dbe2b20c42152d1265b92b619576b5bd345b47a648d12b4cfc94eea85884c45d296005913b059268d8464668a5e71d0fb53347b343b6377b9ce4707693b05439"
    "0b95e4320dbf06e89895527a1ecc4019463f85b7d8b1799193b7101ad7f324ef21408f84850323195110a5fd2c565317a67156f724a7e688b2843269bd78f75a")

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
    install -Dm755 "${srcdir}"/"${pkgname}".sh "${pkgdir}"/usr/bin/"${pkgname}"

    # Install the documentation.
    install -Dm644 "${srcdir}"/"${pkgname}"-"${pkgver}"/README.md "${pkgdir}"/usr/share/doc/"${pkgname}"/
    cp -r "${srcdir}"/"${pkgname}"-"${pkgver}"/docs/* "${pkgdir}"/usr/share/doc/"${pkgname}"/
    find "${pkgdir}"/usr/share/doc/"${pkgname}"/ -type d -exec chmod 755 {} +
    find "${pkgdir}"/usr/share/doc/"${pkgname}"/ -type f -exec chmod 644 {} +

    # Install the license.
    install -Dm644 "${srcdir}"/"${pkgname}"-"${pkgver}"/LICENSE "${pkgdir}"/usr/share/licenses/"${pkgname}"/
}
