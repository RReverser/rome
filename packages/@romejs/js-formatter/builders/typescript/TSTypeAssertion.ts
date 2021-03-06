/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {TSTypeAssertion} from "@romejs/js-ast";
import {Builder} from "@romejs/js-formatter";
import {Token, concat, group, indent, softline} from "../../tokens";

export default function TSTypeAssertion(
	builder: Builder,
	node: TSTypeAssertion,
): Token {
	if (builder.options.typeAnnotations) {
		return group(
			concat([
				group(
					concat([
						"<",
						indent(concat([softline, builder.tokenize(node.typeAnnotation, node)])),
						softline,
						">",
					]),
				),
				builder.tokenize(node.expression, node),
			]),
		);
	} else {
		return builder.tokenize(node.expression, node);
	}
}
