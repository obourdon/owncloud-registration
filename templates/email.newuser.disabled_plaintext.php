<?php
echo $l->t('A new user "%s" %s has created an account on %s and awaits admin approbation', [$_['user'], $_['email'], $_['sitename']]);
echo "\n\n".$_['link'];
?>
