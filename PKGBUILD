# Maintainer: Oscar Garcia Amor <ogarcia@connectical.com>

pkgbase=vault-bin
pkgname=('vault-bin' 'vault-cli-bin')
pkgver=1.6.3
pkgrel=1
url='https://vaultproject.io/'
license=('MPL')
arch=('i686' 'x86_64' 'armv7h' 'aarch64')
depends=('glibc')
source=('vault.tmpfiles'
        'vault.sysusers'
        'vault.service'
        'vault.hcl'
        'LICENSE')
source_i686=("https://releases.hashicorp.com/vault/${pkgver}/vault_${pkgver}_linux_386.zip")
source_x86_64=("https://releases.hashicorp.com/vault/${pkgver}/vault_${pkgver}_linux_amd64.zip")
source_armv7h=("https://releases.hashicorp.com/vault/${pkgver}/vault_${pkgver}_linux_arm.zip")
source_aarch64=("https://releases.hashicorp.com/vault/${pkgver}/vault_${pkgver}_linux_arm64.zip")
sha512sums=('aa56041c53434195dbf544ce9bf18d7bfb530bf65c9b692163621185b0a46035273a4eeda6454ceb93201117f23662e44ac9c88eda3cf12153cdce40df0fde09'
            '92616ccf83fa5ca9f8b0d022cf8ceb1f3549e12b66bf21d9f77f3eb26bd75ec1dc36c155948ec987c642067b85fbfc30a9217d6c503d952a402aa5ef63e50928'
            'a97d10208fd99b29cf532c9b5882fe1bbb3faee1d1d706f95a9c379fef461c65a9f16c8530438920024e69871ebd8c7329e6b65025ad65092950bfb74ce393b3'
            '8f8769f2c285f77b10c1f96e43acb233c70509ca657a8113f9d1f13a73ba55de6acdc6984597a4e1da19d6a7748e05f3523461a3b4bce10b9541aa5340400dd6'
            'dd6de68678d972517c135992217f625a3bc728a6495e1f6052df9926cf9cbc212dfa2a612be5a25d7ce5eeeef41e2b12f0d82af6176a6e0ca043b43c622c6347')
sha256sums_i686=('be1e451e8d348c5f6e9d668989bbcc69c9f4c25cec69c2f0f468d7c93d5095ae')
sha256sums_x86_64=('844adaf632391be41f945143de7dccfa9b39c52a72e8e22a5d6bad9c32404c46')
sha256sums_armv7h=('ecf9ffa108a4f36d7d01b5413cd1b629cd7688d28a030a0ac60a1aebe4ab4419')
sha256sums_aarch64=('11515792a2c5635bf8ea6ce7f9b6e7f865cf83d66220b3022678e9070b8b8892')

package_vault-bin () {
  pkgdesc='A tool for managing secrets'
  conflicts=('vault' 'vault-git' 'vault-cli-bin')
  install='vault.install'
  backup=('etc/vault.hcl')

  install -Dm755 vault "${pkgdir}/usr/bin/vault"
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  install -Dm644 "${srcdir}/vault.hcl" "${pkgdir}/etc/vault.hcl"
  install -Dm644 "${srcdir}/vault.service" \
    "${pkgdir}/usr/lib/systemd/system/vault.service"
  install -Dm644 "${srcdir}/vault.sysusers" \
    "${pkgdir}/usr/lib/sysusers.d/vault.conf"
  install -Dm644 "${srcdir}/vault.tmpfiles" \
    "${pkgdir}/usr/lib/tmpfiles.d/vault.conf"
}

package_vault-cli-bin () {
  pkgdesc='A tool for managing secrets (CLI Only)'
  conflicts=('vault' 'vault-git' 'vault-bin')

  install -Dm755 vault "${pkgdir}/usr/bin/vault"
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
