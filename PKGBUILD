# Maintainer: Kamalavelan aka demonshreder <sskamalavelan@gmail.com>

pkgname=monocypher
_pkgname=monocypher
pkgver=2.0.1
pkgrel=1
pkgdesc="Monocypher is an easy to use crypto library inspired by libsodium and TweetNaCl"
arch=('i686' 'x86_64')
url="http://loup-vaillant.fr/projects/monocypher/"
license=('custom:BSD')
depends=('glibc')
source=("https://monocypher.org/download/monocypher-${pkgver}.tar.gz")
sha512sums=('1bc470c7602bd580c796330022bae2d4f4aa1999dba7e285354aa4da317da727c3a0f5e1ab5bbbe32cd05d0df33001dee6d4c6d5c7ed73bb92d2728b9761d9e4')

package() {
  cd "$_pkgname-$pkgver"
  install -d -m 755 "$pkgdir/usr/include/$pkgname"
  install -m 644 src/monocypher.c "$pkgdir/usr/include/$pkgname/monocypher.c"
  install -m 644 src/monocypher.h "$pkgdir/usr/include/$pkgname/monocypher.h"
  install -m 644 src/sha512.h "$pkgdir/usr/include/$pkgname/sha512.h"
  install -m 644 src/sha512.c "$pkgdir/usr/include/$pkgname/sha512.c"
  install -d -m 755 "$pkgdir/usr/share/licenses/$pkgname"
  install -m 644 LICENCE.md "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  install -d -m 755 "$pkgdir/usr/share/man/man3"
  install -m 644 doc/man/man3/crypto_argon2i.3monocypher "$pkgdir/usr/share/man/man3/crypto_argon2i.3monocypher"
  install -m 644 doc/man/man3/crypto_check.3monocypher@ "$pkgdir/usr/share/man/man3/crypto_check.3monocypher@"
  install -m 644 doc/man/man3/crypto_poly1305.3monocypher "$pkgdir/usr/share/man/man3/crypto_poly1305.3monocypher"
  install -m 644 doc/man/man3/crypto_unlock_final.3monocypher@ "$pkgdir/usr/share/man/man3/crypto_unlock_final.3monocypher@"
  install -m 644 doc/man/man3/crypto_argon2i_general.3monocypher@ "$pkgdir/usr/share/man/man3/crypto_argon2i_general.3monocypher@"
  install -m 644 doc/man/man3/crypto_check_final.3monocypher@ "$pkgdir/usr/share/man/man3/crypto_check_final.3monocypher@"
  install -m 644 doc/man/man3/crypto_poly1305_final.3monocypher@ "$pkgdir/usr/share/man/man3/crypto_poly1305_final.3monocypher@"
  install -m 644 doc/man/man3/crypto_unlock_init.3monocypher@ "$pkgdir/usr/share/man/man3/crypto_unlock_init.3monocypher@"
  install -m 644 doc/man/man3/crypto_check_init.3monocypher@ "$pkgdir/usr/share/man/man3/crypto_check_init.3monocypher@"
  install -m 644 doc/man/man3/crypto_poly1305_init.3monocypher@ "$pkgdir/usr/share/man/man3/crypto_poly1305_init.3monocypher@"
  install -m 644 doc/man/man3/crypto_unlock_update.3monocypher@ "$pkgdir/usr/share/man/man3/crypto_unlock_update.3monocypher@"
  install -m 644 doc/man/man3/crypto_blake2b_final.3monocypher@ "$pkgdir/usr/share/man/man3/crypto_blake2b_final.3monocypher@"
  install -m 644 doc/man/man3/crypto_check_update.3monocypher@ "$pkgdir/usr/share/man/man3/crypto_check_update.3monocypher@"
  install -m 644 doc/man/man3/crypto_poly1305_update.3monocypher@ "$pkgdir/usr/share/man/man3/crypto_poly1305_update.3monocypher@"
  install -m 644 doc/man/man3/crypto_verify16.3monocypher "$pkgdir/usr/share/man/man3/crypto_verify16.3monocypher"
  install -m 644 doc/man/man3/crypto_blake2b_general.3monocypher@ "$pkgdir/usr/share/man/man3/crypto_blake2b_general.3monocypher@"
  install -m 644 doc/man/man3/crypto_key_exchange.3monocypher "$pkgdir/usr/share/man/man3/crypto_key_exchange.3monocypher"
  install -m 644 doc/man/man3/crypto_sign.3monocypher "$pkgdir/usr/share/man/man3/crypto_sign.3monocypher"
  install -m 644 doc/man/man3/crypto_verify32.3monocypher@ "$pkgdir/usr/share/man/man3/crypto_verify32.3monocypher@"
  install -m 644 doc/man/man3/crypto_blake2b_general_init.3monocypher@ "$pkgdir/usr/share/man/man3/crypto_blake2b_general_init.3monocypher@"
  install -m 644 doc/man/man3/crypto_key_exchange_public_key.3monocypher@ "$pkgdir/usr/share/man/man3/crypto_key_exchange_public_key.3monocypher@"
  install -m 644 doc/man/man3/crypto_sign_final.3monocypher@ "$pkgdir/usr/share/man/man3/crypto_sign_final.3monocypher@"
  install -m 644 doc/man/man3/crypto_verify64.3monocypher@ "$pkgdir/usr/share/man/man3/crypto_verify64.3monocypher@"
  install -m 644 doc/man/man3/crypto_blake2b_init.3monocypher@ "$pkgdir/usr/share/man/man3/crypto_blake2b_init.3monocypher@"
  install -m 644 doc/man/man3/crypto_lock.3monocypher "$pkgdir/usr/share/man/man3/crypto_lock.3monocypher"
  install -m 644 doc/man/man3/crypto_sign_init_first_pass.3monocypher "$pkgdir/usr/share/man/man3/crypto_sign_init_first_pass.3monocypher"
  install -m 644 doc/man/man3/crypto_wipe.3monocypher "$pkgdir/usr/share/man/man3/crypto_wipe.3monocypher"
  install -m 644 doc/man/man3/crypto_blake2b_update.3monocypher@ "$pkgdir/usr/share/man/man3/crypto_blake2b_update.3monocypher@"
  install -m 644 doc/man/man3/crypto_lock_aead.3monocypher@ "$pkgdir/usr/share/man/man3/crypto_lock_aead.3monocypher@"
  install -m 644 doc/man/man3/crypto_sign_init_second_pass.3monocypher@ "$pkgdir/usr/share/man/man3/crypto_sign_init_second_pass.3monocypher@"
  install -m 644 doc/man/man3/crypto_x25519.3monocypher "$pkgdir/usr/share/man/man3/crypto_x25519.3monocypher"
  install -m 644 doc/man/man3/crypto_chacha20_encrypt.3monocypher "$pkgdir/usr/share/man/man3/crypto_chacha20_encrypt.3monocypher"
  install -m 644 doc/man/man3/crypto_lock_auth_ad.3monocypher@ "$pkgdir/usr/share/man/man3/crypto_lock_auth_ad.3monocypher@"
  install -m 644 doc/man/man3/crypto_sign_public_key.3monocypher@ "$pkgdir/usr/share/man/man3/crypto_sign_public_key.3monocypher@"
  install -m 644 doc/man/man3/crypto_x25519_public_key.3monocypher@ "$pkgdir/usr/share/man/man3/crypto_x25519_public_key.3monocypher@"
  install -m 644 doc/man/man3/crypto_chacha20_H.3monocypher "$pkgdir/usr/share/man/man3/crypto_chacha20_H.3monocypher"
  install -m 644 doc/man/man3/ crypto_lock_auth_message.3monocypher@ "$pkgdir/usr/share/man/man3/ crypto_lock_auth_message.3monocypher@"
  install -m 644 doc/man/man3/crypto_sign_update.3monocypher@ "$pkgdir/usr/share/man/man3/crypto_sign_update.3monocypher@"
  install -m 644 doc/man/man3/crypto_zerocmp.3monocypher@ "$pkgdir/usr/share/man/man3/crypto_zerocmp.3monocypher@"
  install -m 644 doc/man/man3/crypto_chacha20_init.3monocypher@ "$pkgdir/usr/share/man/man3/crypto_chacha20_init.3monocypher@"
  install -m 644 doc/man/man3/crypto_lock_final.3monocypher@ "$pkgdir/usr/share/man/man3/crypto_lock_final.3monocypher@"
  install -m 644 doc/man/man3/crypto_lock_final.3monocypher@ "$pkgdir/usr/share/man/man3/crypto_lock_final.3monocypher@"
  install -m 644 doc/man/man3/crypto_unlock.3monocypher@ "$pkgdir/usr/share/man/man3/crypto_unlock.3monocypher@"
  install -m 644 doc/man/man3/intro.3monocypher "$pkgdir/usr/share/man/man3/intro.3monocypher"
  install -m 644 doc/man/man3/crypto_chacha20_set_ctr.3monocypher@r "$pkgdir/usr/share/man/man3/crypto_chacha20_set_ctr.3monocypher@r"
  install -m 644 doc/man/man3/crypto_lock_init.3monocypher "$pkgdir/usr/share/man/man3/crypto_lock_init.3monocypher"
  install -m 644 doc/man/man3/crypto_unlock_aead.3monocypher@ "$pkgdir/usr/share/man/man3/crypto_unlock_aead.3monocypher@"
  install -m 644 doc/man/man3/crypto_chacha20_stream.3monocypher@ "$pkgdir/usr/share/man/man3/crypto_chacha20_stream.3monocypher@"
  install -m 644 doc/man/man3/crypto_lock_update.3monocypher@ "$pkgdir/usr/share/man/man3/crypto_lock_update.3monocypher@"
  install -m 644 doc/man/man3/crypto_unlock_auth_ad.3monocypher@ "$pkgdir/usr/share/man/man3/crypto_unlock_auth_ad.3monocypher@"
  install -m 644 doc/man/man3/crypto_chacha20_x_init.3monocypher@ "$pkgdir/usr/share/man/man3/crypto_chacha20_x_init.3monocypher@"
  install -m 644 doc/man/man3/crypto_unlock_auth_message.3monocypher@ "$pkgdir/usr/share/man/man3/crypto_unlock_auth_message.3monocypher@"
}
